import { getBlindboxInfo } from '../services/bindboxService';
import Decimal from 'decimal.js-light';

const rate = 0.000000001;

export default {
  namespace: 'blindbox',
  state: {
    costAmount: 0.02,
    remainAmount: 1000,
  },
  subscriptions: {
    setup({ dispatch }) {
      dispatch({
        type: 'getBlindboxInfo',
      });
    },
  },
  effects: {
    *getBlindboxInfo({}, { call, put }) {
      const res = yield call(getBlindboxInfo);
      if (res.code === 200) {
        const resPrice = res.data.price;
        const price = new Decimal(resPrice).mul(rate).toFixed(2);
        yield put({
          type: 'updateState',
          payload: {
            costAmount: price,
            remainAmount: res.data.stock,
          },
        });
      }
    },
  },
  reducers: {
    updateState(state, { payload }) {
      return {
        ...state,
        ...payload,
      };
    },
  },
};
