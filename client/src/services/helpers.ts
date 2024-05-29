import axios, { AxiosRequestConfig, AxiosResponse } from "axios";

export const WEB_API_URL = "http://localhost:3000";

type RequestHeaders = {
  headers: {
    "Content-Type": string;
    Authorization?: string;
  };
};

//If decide to implement authentication in the future
const defaultConfig = (accessToken?: string): RequestHeaders => ({
  headers: {
    "Content-Type": "application/json",
    Authorization: accessToken ? `Bearer ${accessToken}` : undefined,
  },
});

export function postRequest<T>(
  url: string,
  data: Record<string, unknown>,
  accessToken?: string,
  customConfig: AxiosRequestConfig = {}
): Promise<AxiosResponse<T>> {
  return axios.post(url, data, {
    ...defaultConfig(accessToken),
    ...customConfig,
  });
}

export function putRequest<T>(
  url: string,
  data: Record<string, unknown>,
  accessToken: string,
  customConfig: AxiosRequestConfig = {}
): Promise<AxiosResponse<T>> {
  return axios.put(url, data, {
    ...defaultConfig(accessToken),
    ...customConfig,
  });
}

export function getRequest<T>(
  url: string,
  accessToken?: string,
  customConfig: AxiosRequestConfig = {}
): Promise<AxiosResponse<T>> {
  return axios.get(url, { ...defaultConfig(accessToken), ...customConfig });
}
