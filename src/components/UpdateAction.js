export default function UpdateAction(state, payload) {
    return {
      ...state,
      yourDetails: {
        ...state.yourDetails,
        ...payload
      }
    };
  }