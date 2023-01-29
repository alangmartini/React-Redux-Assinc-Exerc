import { FETCH_DATA_SUCCESS, ISLOADING_FALSE, ISLOADING_TRUE } from '../actions/data';

const INITIAL_STATE = {
  data: null,
  isLoading: true,
};

const dataReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
  case FETCH_DATA_SUCCESS:
    return {
      ...state,
      data: action.payload,
    };
  case ISLOADING_FALSE:
    return {
      ...state,
      isLoading: false,
    };
  default:
    return state;
  }
};

export default dataReducer;
