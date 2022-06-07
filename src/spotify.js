import axios from "axios";


const authEndpoint = "https://accounts.spotify.com/authorize?";
const clientId = '5923007d30a84c5abe99e0da2dc325d0';
const redirectUri = "https://agha-safarzada.github.io/Music-Player";
const scopes = ["user-library-read","playlist-read-private"];

export const loginEndpoint = `${authEndpoint}client_id=${clientId}&redirect_uri=${redirectUri}&scope=${scopes.join(
    "%20"
  )}&response_type=token&show_dialog=true`;
  
  const apiClient = axios.create({
    baseURL: "https://api.spotify.com/v1/",
  });
  
  export const setClientToken = (token) => {
    apiClient.interceptors.request.use(async function (config) {
      config.headers.Authorization = "Bearer " + token;
      return config;
    });
  };
  
  export default apiClient;
