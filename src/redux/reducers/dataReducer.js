import { FETCH_DATA_SUCCESS, TOGGLE_ISLOADING } from '../actions/data';

const INITIAL_STATE = {
  data,
  isLoading: true,
};

const dataReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
  case FETCH_DATA_SUCCESS:
    return {
      ...state,
      data: action.payload,
    };
  case TOGGLE_ISLOADING:
    return {
      ...state,
      isLoading: !state.isLoading,
    };
  default:
    return state;
  }
};

export default dataReducer;
