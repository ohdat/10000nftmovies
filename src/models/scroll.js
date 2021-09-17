function isMobile() {
  return window.innerWidth < 875;
}

export default {
  namespace: 'scroll',
  state: {
    currentNode: 'Spec',
  },
  effects: {
    *toggleNode({ payload }, { put }) {
      console.log('payload', payload);
      yield put({
        type: 'updateState',
        payload: {
          currentNode: payload.id,
        },
      });
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
