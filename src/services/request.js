import axios from "axios";

const request = axios.create({
  baseURL: "http://localhost:3000", // API address
});

// add the token
request.interceptors.request.use(
  (config) => {
    const accessToken = localStorage.getItem("accessToken");
    if (accessToken) {
      config.headers.Authorization = `Bearer ${accessToken}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// refresh the token
request.interceptors.response.use(
  (response) => {
    return response;
  },
  async (error) => {
    const originalRequest = error.config;
    if (
      error.response.status === 401 &&
      !originalRequest._retry &&
      localStorage.getItem("refreshToken")
    ) {
      originalRequest._retry = true;
      try {
        const response = await axios.post("/auth/refresh-token", {
          refreshToken: localStorage.getItem("refreshToken"),
        });

        const newAccessToken = response.data.token;

        localStorage.setItem("accessToken", newAccessToken);

        request.defaults.headers.common[
          "Authorization"
        ] = `Bearer ${newAccessToken}`;

        return request(originalRequest);
      } catch (refreshError) {
        return Promise.reject(refreshError);
      }
    }
    return Promise.reject(error);
  }
);

export default request;
