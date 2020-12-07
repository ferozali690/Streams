import {
  SIGN_IN,
  SIGN_OUT,
  GET_STREAM_LIST,
  CREATE_STREAM,
  EDIT_STREAM,
  DELETE_STREAM,
  FETCH_SINGLE_STREAM,
} from "./Types";
import Streams from "../Apis/Streams";

export const authSignIn = (userId) => {
  return {
    type: SIGN_IN,
    payload: userId,
  };
};

export const authSignOut = () => {
  return {
    type: SIGN_OUT,
  };
};

export const fetch_Stream_List = (formValues) => {
  return async function (dispacth) {
    const responseData = await Streams.get("/streams", formValues);
    console.log("response", responseData);
    dispacth({ type: GET_STREAM_LIST, payload: responseData.data });
  };
};

export const add_Stream = (formValues) => async (dispatch, getState) => {
  const { userId } = getState().auth;
  const responseData = await Streams.post("/streams", {
    ...formValues,
    userId,
  });
  dispatch({ type: CREATE_STREAM, payload: responseData.data });
};

export const edit_Stream = (id, formValues) => {
  return async function (dispatch) {
    const responseData = await Streams.put(`/streams/${id}`, formValues);
    dispatch({ type: EDIT_STREAM, payload: responseData });
  };
};

export const delete_Stream = (id) => {
  return async function (dispatch) {
    await Streams.delete(`/streams/${id}`);
    dispatch({ type: DELETE_STREAM, payload: id });
  };
};

export const fetch_Single_Stream = (id) => {
  return async function (dispatch) {
    const responseData = await Streams.get(`/streams/${id}`);
    dispatch({ type: FETCH_SINGLE_STREAM, payload: responseData.data });
  };
};
