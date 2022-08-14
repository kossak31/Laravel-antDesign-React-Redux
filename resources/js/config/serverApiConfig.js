console.log(
  "API"
)

export const API_BASE_URL =
  process.env.NODE_ENV == "production" ||
    process.env.REACT_APP_DEV_REMOTE == "remote"
    ? "https://starter-mern.herokuapp.com/api/"
    : "http://localhost:8000/api/v1/";

// export const API_BASE_URL = "https://starter-mern.herokuapp.com/api/";
export const ACCESS_TOKEN_NAME = "x-auth-token"
