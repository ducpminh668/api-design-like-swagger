const initialState = {
  baseURL: 'http://45.117.171.254:81/',
  apiData: [
    {
      id: "1",
      title: "Auth",
      actions: [
        {
          id: "1",
          name: "Login User",
          description: "Api to login user",
          url: "login",
          method: "POST"
        },
        {
          id: "2",
          name: "Create User",
          description: "Api to create user",
          url: "create-user",
          method: "POST"
        },
        {
          id: "3",
          name: "Update User",
          description: "Api to update user",
          url: "update-user",
          method: "PUT"
        }
      ]
    }
  ]
};

const apiReducer = (state = initialState, action) => {
  switch (action.type) {
    default:
      return { ...state };
  }
};

export default apiReducer;
