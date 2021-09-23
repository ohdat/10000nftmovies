/* eslint-disable prefer-promise-reject-errors */
import { useState, useEffect, useCallback, useRef } from 'react';
import { toChecksumAddress } from 'ethereum-checksum-address';
import { ethers } from 'ethers';
import ABI from './abi.json';

export class Contract {
  constructor(address, ABI, provider) {
    this.ABI = ABI;
    this.address = address;
    this.contract = new ethers.Contract(
      toChecksumAddress(address),
      ABI,
      provider,
    );
  }

  _log(event, method, extraData = {}) {
    console.groupCollapsed(`合约调用 - ${event} - ${method}`);
    console.table({
      合约地址: { value: this.address },
      调用方法: { value: method },
      ...extraData,
    });
    console.groupEnd();
  }

  _upsertTransaction(...args) {
    if (window.__upsertTransaction__) {
      window.__upsertTransaction__(...args);
    }
  }

  call(method, args = []) {
    return this.contract.methods[method](...args)
      .call()
      .then((data) => {
        this._log('call', method, {
          方法入参: { value: args },
          结果: { value: data },
        });
        return data;
      });
  }

  send(method, args = [], options = {}) {
    return this.estimateGas(method, args, { ...options }).then(
      (gas) =>
        new Promise((resolve, reject) => {
          this.contract.methods[method](...args)
            .send({
              gas,
              ...options,
            })
            .on('transactionHash', (hash) => {
              this._upsertTransaction(
                {
                  method,
                  args,
                  options,
                },
                hash,
              );
            })
            // .on('confirmation', (confirmationNumber, receipt) => {
            //   console.log(confirmationNumber, receipt);
            // })
            .on('receipt', (receipt) => {
              this._log('send', method, {
                方法入参: { value: args },
                调用参数: { value: options },
                结果: { value: receipt },
              });
              this._upsertTransaction(
                {
                  method,
                  args,
                  options,
                },
                receipt.transactionHash,
                receipt,
              );
              resolve(receipt);
            })
            .on('error', (error, receipt) => {
              reject(error);
            });
        }),
    );
  }

  estimateGas(method, args = [], options = {}) {
    return (
      this.contract.methods[method](...args)
        .estimateGas(options)
        // gas多一点防止出问题
        .then((gas) => {
          this._log('estimateGas', method, {
            方法入参: { value: args },
            调用参数: { value: options },
            预测gas: { value: gas },
            调整gas: { value: parseInt(gas * 1.05, 10) },
          });
          return parseInt(gas * 1.05, 10);
        })
    );
  }

  getPastEvents(eventName, filter) {
    return this.contract.getPastEvents(eventName, filter).then((data) => {
      this._log('getPastEvents', eventName, {
        过滤: { value: filter },
        结果: { value: data },
      });
      return data;
    });
  }
}

const CONTRACT_ADDRESS = '0x000'; // 合约地址
export default class TokenContract extends Contract {
  constructor(provider) {
    super(CONTRACT_ADDRESS, ABI, provider);
  }

  purchase(amount, options = {}) {
    return this.send('purchase', [amount], options);
  }
}
