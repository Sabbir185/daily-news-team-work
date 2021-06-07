import axios from "axios";

export const LOAD_DATA = "LOAD_DATA";
export const USER_REQUEST = "USER_REQUEST";
export const GET_USER_SUCCESS = "GET_USER_SUCCESS";
export const GET_USER_FAILED = "GET_USER_SUCCESS";

export const loadData = () => {

  return async (dispatch) => {
    try {
      dispatch({
        type: USER_REQUEST,
      });

      const data = await axios.get(
        `https://nameless-beyond-33007.herokuapp.com/blogs`
      );

      dispatch({
        type: GET_USER_SUCCESS,
        payload: data.data,
      });
    } catch (error) {
      dispatch({
        type: GET_USER_FAILED,
        payload: error.message,
      });
    }
  }
}


export const userLogin = (payload) => {
  return {
    type: "user_login",
    payload
  }
}

