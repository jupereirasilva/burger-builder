import axios from "axios";

const instance = axios.create({
  baseURL: "https://react-burger-builder-561bd.firebaseio.com/"
});

export default instance;
