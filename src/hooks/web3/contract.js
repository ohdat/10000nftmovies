/* eslint-disable prefer-promise-reject-errors */
import { useState, useEffect, useCallback, useRef } from 'react';
import { toChecksumAddress } from 'ethereum-checksum-address';
import { ethers } from 'ethers';
import Decimal from 'decimal.js-light';
import ABI from './abi.json';

// TODO: 合约地址和单价
const CONTRACT_ADDRESS = '0xe5fdb9f1435daac09cce08ed070db52226ef3203';
const PRICE = new Decimal('0.03');

export default class TokenContract {
  constructor(provider) {
    this.ABI = ABI;
    this.address = CONTRACT_ADDRESS;
    this.provider = provider;
  }

  getInstance() {
    return new ethers.Contract(
      toChecksumAddress(this.address),
      this.ABI,
      this.provider,
    );
  }

  purchase(amount, options = {}) {
    const contract = this.getInstance();
    const web3 = contract.provider;
    const account = options.from;
    return web3.getBalance(account).then((balance) => {
      if (PRICE.lt(balance.toString())) {
        return Promise.all([
          contract
            .purchase(amount, {
              value: ethers.utils.parseEther(PRICE.mul(amount).toString()),
            })
            .then((tx) => tx.wait()),
          new Promise((resolve) => {
            contract.once(
              'PurchaseSuccessful',
              (buyer, amount, totalPrice, nftTokenIds) => {
                console.log(buyer, amount, totalPrice, nftTokenIds);
                resolve({
                  buyer,
                  amount: amount.toString(),
                  totalPrice: ethers.utils.formatEther(totalPrice.toString()),
                  nftTokenIds: nftTokenIds.map((n) => n.toString()),
                });
              },
            );
          }),
        ]).then(([tx, event]) => {
          console.log(tx, event);
          return {
            success: tx.status === 1,
            ...event,
          };
        });
      } else {
        throw new Error('insufficient funds');
      }
    });
  }
}
