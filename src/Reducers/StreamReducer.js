import {
  GET_STREAM_LIST,
  CREATE_STREAM,
  EDIT_STREAM,
  DELETE_STREAM,
  FETCH_SINGLE_STREAM,
} from "../Actions/Types";

const StreamsReducer = (state = {}, action) => {
  switch (action.type) {
    case GET_STREAM_LIST:
      return { ...state, ...action.payload };
    // case EDIT_STREAM:
    //   return { ...state, [action.payload.id]: action.payload };
    default:
      return state;
  }
};

export default StreamsReducer;
