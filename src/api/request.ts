import type { AxiosRequestConfig, Method } from "axios";
import axios from "axios";

interface CustomAxiosRequestConfig<D = any>
  extends Omit<AxiosRequestConfig, "url" | "method" | "data"> {
  url: string;
  method: Method;
  body?: D;
}

const axiosInstance = axios.create({
  baseURL: process.env.REACT_APP_API_BASE_URL,
});

const request = async ({
  url,
  method,
  params,
  body,
  headers,
}: CustomAxiosRequestConfig) => {
  const timeout = 10000;
  const accessToken = localStorage.getItem("accessToken") ?? "";

  const config: AxiosRequestConfig = {
    timeout,
    params,
    headers: {
      ...headers,
      Authorization: `Bearer ${accessToken}`,
    },
  };

  switch (method) {
    case "get" || "GET":
      return await axiosInstance.get(url, config);
    case "post" || "POST":
      return await axiosInstance.post(url, body, config);
    case "patch" || "PATCH":
      return await axiosInstance.patch(url, body, config);
    case "put" || "PUT":
      return await axiosInstance.put(url, body, config);
    case "delete" || "DELETE":
      return await axiosInstance.delete(url, config);
    default:
      return null;
  }
};

export default request;
