import axios, { type AxiosRequestConfig } from "axios";

export interface FetchResponse<T> {
  count: number;
  next: string | null;
  previous: string | null;
  results: T[];
}

const axioInstance = axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "bea2fa0c918d4493ab6318b08488c0f2",
  },
});

export default class APIClient<T> {
  endpoint: string;

  constructor(endpoint: string) {
    this.endpoint = endpoint;
  }

  getAll = (config: AxiosRequestConfig) => {
    return axioInstance
      .get<FetchResponse<T>>(this.endpoint, config)
      .then((res) => res.data);
  };

  get = (id: number | string) => {
    return axioInstance
      .get<T>(this.endpoint + "/" + id)
      .then((res) => res.data);
  };
}
