import type { Method } from 'axios';
import requests from './request';

export interface HTTPConfig {
  url: string;
  method: Method;
  data?: Record<string, unknown>;
  params?: Record<string, unknown>;
}

const useHttp = <T>(config: HTTPConfig): Promise<T> => {
  return new Promise<T>((resolve, reject) => {
    requests({
      url: config.url,
      method: config.method,
      data: config.data,
      params: config.params,
    })
      .then((resp) => {
        resolve(resp.data);
      })
      .catch((err) => {
        reject(err);
      });
  });
};

export default useHttp;
