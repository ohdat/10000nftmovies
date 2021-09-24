import { getBlindboxInfo, getWhiteList } from '../services/bindboxService';
import Decimal from 'decimal.js-light';

const rate = 0.000000001;

export default {
  namespace: 'blindbox',
  state: {
    costAmount: 0.02,
    remainAmount: 1000,
    whiteList: [],
  },
  subscriptions: {
    setup({ dispatch }) {
      dispatch({
        type: 'getBlindboxInfo',
      });
      dispatch({
        type: 'getWhiteList',
      });
    },
  },
  effects: {
    *getBlindboxInfo({}, { call, put }) {
      const res = yield call(getBlindboxInfo);
      console.log('获取接口');
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
    *getWhiteList({}, { call, put }) {
      const res = yield call(getWhiteList);
      if (res.code === 200) {
        const whiteList = res.data.white_list.map((i) => i.toLowerCase());

        yield put({
          type: 'updateState',
          payload: {
            whiteList,
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
