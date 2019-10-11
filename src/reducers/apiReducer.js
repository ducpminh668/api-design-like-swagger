const initialState = {
  baseURL: "http://45.117.171.254:81/api/",
  apiData: [
    {
      id: "1",
      title: "Auth",
      actions: [
        {
          id: "1",
          name: "Login User",
          description: "Api to login user",
          url: "auth/login",
          method: "POST",
          body: [
            {
              field: "staff_id",
              type: "String",
              required: true,
              description: "required"
            },
            {
              field: "password",
              type: "String",
              required: true,
              description: "required"
            }
          ],
          reponseSuccessExample: {
            statusCode: 200,
            statusMessage: "OK",
            response: {
              access_token:
                "eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsImp0aSI6ImViYWVmMWIxODg0ZDdkNmEwMTFjNDQ3Yzg0M2ZkOWQxNDcwZGRlYzAxNWEyYmY1YjZkMTdmZDgxNzE5Y2MxYjdmZGMwYzFhMGViZmFmNGY2In0.eyJhdWQiOiIxIiwianRpIjoiZWJhZWYxYjE4ODRkN2Q2YTAxMWM0NDdjODQzZmQ5ZDE0NzBkZGVjMDE1YTJiZjViNmQxN2ZkODE3MTljYzFiN2ZkYzBjMWEwZWJmYWY0ZjYiLCJpYXQiOjE1NzA3NzY5MjksIm5iZiI6MTU3MDc3NjkyOSwiZXhwIjoxNjAyMzk5MzI5LCJzdWIiOiI1Iiwic2NvcGVzIjpbXX0.CuLSKNtif9JPDNJPZZXjCiQCJebE-_BVOD7HjbY6mv8MNbb4LVzBL9Lt6iJ2VVRD9kTgQvNjXuIVZR1-9TCCf_UyEI_KMNjkZpGqcMUNJ_1sOWJ46z6UD0Qs0o2q2NSnigVsI-0FvE6TrYvpE_edD8NTYtER5Nj0JNYIiS2aKhZ6nGWool1iMviqtoPHMrGRSRgX4dAopceetamqjKFPH0WHrXBLzE0BO6Gzg2NI7k9UzurfJb2YWck4a_GfqLHx3TWojlh9ewu5ER9_5PAM3Ju3G7fItZ9wowJ7U6aub2GUcH_UYGUFRvGtI-Pb6SfUk2v4nRIQpWaVshF20Ykr5teZYawEu5b3OYS7TYMw6Qp29Ah2EYelEobcLh8dhwFaIP2KYXsBwj_b4OJpNdCw_-SCondoJpuREIXqaU2pvZj5wbj7Qod2pyboGw7ze7TUhrrLCGmSks03e7seve-ImFNrt1ebrUfh2Kkqpy2MGh62CiTWVfXYXdOmVEEu0A2EfqOaZ6OVoYTzkLQnUu6LYL9O9qjStoSSu3oWpJ2wxmysh_1VC-LWe_Q4Wc5H2wyR3K8ksXNW_xsyTvUJlQkbpPv2z_fJuuelq1PIgGQs7JFiZPy2PKyFoKiJG7yRF6tPyTe4nymiiH_aSYQRwrOkf21iuZLl8tGvWRotlsbz7oo",
              token_type: "Bearer",
              expires_at: "2020-10-11 13:55:29",
              user: {
                user: {
                  id: 5,
                  name: "Nguyễn Tiến Dũng",
                  staff_id: "101468",
                  email: "herosouris@gmail.com",
                  email_verified_at: null,
                  department_id: 3,
                  is_admin: 1,
                  dates_of_attendance: null,
                  created_at: null,
                  updated_at: null,
                  department: {
                    id: 3,
                    department_id: "IT",
                    department_name: "Công nghệ thông tin",
                    manager_id: null,
                    longitude: "105.80038562277002",
                    latitude: "21.011502568807856",
                    created_at: null,
                    updated_at: null
                  }
                },
                department: {
                  id: 3,
                  department_id: "IT",
                  department_name: "Công nghệ thông tin",
                  manager_id: null,
                  longitude: "105.80038562277002",
                  latitude: "21.011502568807856",
                  created_at: null,
                  updated_at: null
                }
              }
            }
          },

          responseFail: {
            statusCode: 401,
            statusMessage: "Unauthorized",
            response: {
              message: "Unauthorized"
            }
          }
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
  ],
  response: null
};

const apiReducer = (state = initialState, action) => {
  switch (action.type) {
    case "SEND_SUCCESS": {
      return { ...state, response: action.data };
    }
    default:
      return { ...state };
  }
};

export default apiReducer;
