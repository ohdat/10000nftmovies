import { getBlindboxInfo } from '../services/bindboxService';

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
    *getBlindboxInfo({}, { call }) {
      const res = yield call(getBlindboxInfo);
      console.log('res', res);
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
