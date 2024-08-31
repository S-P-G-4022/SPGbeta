import axios from "axios";


const instance = axios.create();

instance.interceptors.request.use((config) => {
const xtoken =   localStorage.getItem("token");
  

    config.headers.token = xtoken

  
  return config;
});

export default instance;