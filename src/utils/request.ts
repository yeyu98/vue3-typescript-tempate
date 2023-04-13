import { Axios, AxiosError, AxiosResponse, AxiosRequestConfig } from 'axios';

class Request {
  service: Axios;
  constructor(config?: AxiosRequestConfig) {
    this.service = new Axios({
      baseURL: '',
      timeout: 50000,
      ...config,
    });
    this.requestInterceptors();
    this.responseInterceptors();
  }
  private requestInterceptors() {
    this.service.interceptors.request.use(
      (config) => {
        return config;
      },
      (error: AxiosError) => {
        return Promise.reject(error);
      },
    );
  }
  private responseInterceptors() {
    this.service.interceptors.response.use(
      (response: AxiosResponse) => {
        return response.data;
      },
      (error: AxiosError) => {
        return Promise.reject(error);
      },
    );
  }
  get<T>(url: string, options = {}): Promise<AxiosResponse<T>> {
    return this.service.get(url, options).then((res: AxiosResponse<T>) => res);
  }
  post<T>(url: string, data = {}, options = {}): Promise<AxiosResponse<T>> {
    return this.service.post(url, data, options).then((res: AxiosResponse<T>) => res);
  }
  patch<T>(url: string, data = {}, options = {}): Promise<AxiosResponse<T>> {
    return this.service.patch(url, data, options).then((res: AxiosResponse<T>) => res);
  }
  put<T>(url: string, data = {}, options = {}): Promise<AxiosResponse<T>> {
    return this.service.put(url, data, options).then((res: AxiosResponse<T>) => res);
  }
  delete<T>(url: string, options = {}): Promise<AxiosResponse<T>> {
    return this.service.get(url, options).then((res: AxiosResponse<T>) => res);
  }
}

const request = new Request();

export default request;
