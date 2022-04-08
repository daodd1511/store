const isDev = true;
const API_URL = isDev
  ? "http://localhost:4000/api"
  : "https://ducdao-nodejs-api.herokuapp.com/api";
export default { API_URL };
