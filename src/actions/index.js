import { apiService } from "../constants/axiosInstant";

const sendSuccess = res => {
  return {
    type: "SEND_SUCCESS",
    data: res
  };
};

const sendFail = err => {
  return {
    type: "SEND_FAIL",
    data: err
  };
};

export const sendRequest = data => {
  return dispatch => {
    apiService
      .post("/sendApi", data)
      .then(res => {
        console.log(res);
        dispatch(sendSuccess(res.data));
      })
      .catch(err => {
        console.log(err);
        dispatch(sendFail(err));
      });
  };
};
