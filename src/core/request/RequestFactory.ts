import axios, { AxiosRequestConfig, AxiosResponse } from 'axios';
import { AUTH_TOKEN_NAME } from '../constants';

const API_URL = '';

export interface IRequestConfig {
    method: keyof typeof RequestMethods;
    path: string;
    params?: any;
    headers?: { [key: string]: any };
    hasPrefix?: boolean;
}

export enum RequestMethods {
    GET = 'GET',
    POST = 'POST',
    DELETE = 'DELETE',
    PATCH = 'PATCH'
}

export type IRequestConfigList = Record<string, IRequestConfig>;

export type GetParams = Record<string, any>;

export type PostParams = Record<string, any>;

export interface IRequestFactoryOptions {
    requestConfigList: IRequestConfigList;
    onError?: (response?: AxiosResponse) => void;
}

interface IRequestId {
    id: string;
    urlParams?: { [key: string]: string };
}

export default class RequestFactory {
    private options: IRequestFactoryOptions;

    constructor(options: IRequestFactoryOptions) {
        this.options = options;
    }

    protected onError(response: AxiosResponse): Promise<any> {
        if (this.options.onError) {
            this.options.onError(response);
        }

        if (response.status === 401) {
            sessionStorage.removeItem(AUTH_TOKEN_NAME);
            window.location.reload();
        }

        return Promise.reject<any>(response?.statusText);
    }

    protected getRequestOptions = (request: string | IRequestId): IRequestConfig => {
        if (typeof request === 'string') {
            return this.options.requestConfigList[request] as IRequestConfig;
        }

        const options = { ...this.options.requestConfigList[request.id] };

        if (request.urlParams) {
            Object.entries(request.urlParams).forEach(([key, value]) => {
                options.path = options.path?.replace(`{${key}}`, value);
            });
        }
        return options as IRequestConfig;
    }

    public createLoginRequest<T>(body: PostParams) {
        const basic = btoa(`${body.username}:${body.password}`);
        const data = {
            video_auth_token: "A",
            uuid: "2A",
            mobile: false,
            device_info: {}
        };

        const headers: Record<string, any> = {
            'X-Requested-With': 'XMLHttpRequest',
            Authorization: `Basic ${basic}`
        };

        const requetstOptions = this.getRequestOptions('login');
        const url = `${API_URL}${requetstOptions.path}`;

        const requestConfig: AxiosRequestConfig = {
            url,
            method: 'POST',
            headers,
            data
        };

        return axios.request<Promise<T>>(requestConfig)
            .then((response): Promise<T> => {
                if (response.status === 200) {
                    return response.data;
                }
                return this.onError(response);
            })
            .catch(error => this.onError(error?.response));
    }

    public createSimpleRequest<T>(requestStr: string): Promise<T> {
        const token = sessionStorage.getItem(AUTH_TOKEN_NAME);

        if (!token) {
            return Promise.reject();
        }

        const headers: Record<string, any> = {
            Authorization: `Token ${token}`,
            Accept: 'application/json;text/html;*/*'
        };

        const requestConfig: AxiosRequestConfig = {
            url: requestStr,
            headers
        };

        return axios.request<Promise<T>>(requestConfig)
            .then((response): Promise<T> => {
                if (response.status === 200) {
                    return response.data;
                }
                return this.onError(response);
            })
            .catch(error => this.onError(error?.response));
    }

    public createLoginByVideoRequest<T>(data: FormData) {

        const requetstOptions = this.getRequestOptions('loginByVideo');
        const url = `${API_URL}${requetstOptions.path}`;

        const requestConfig: AxiosRequestConfig = {
            url,
            method: 'POST',
            data
        };

        return axios.request<Promise<T>>(requestConfig)
            .then((response): Promise<T> => {
                if (response.status === 200) {
                    return response.data;
                }
                return this.onError(response);
            })
            .catch(error => this.onError(error?.response));
    }

    public createRequest<T>(
        request: string | IRequestId,
        params?: GetParams | string,
        body?: PostParams,
        options?: AxiosRequestConfig
    ): Promise<T> {
        const requetstOptions = this.getRequestOptions(request);
        const isFormData = typeof FormData === 'function' && (body instanceof FormData || body instanceof File);
        const {
            path,
            method,
            headers: requestHeaders,
            hasPrefix = true,
        } = requetstOptions;

        const token = sessionStorage.getItem(AUTH_TOKEN_NAME);

        const headers: Record<string, any> = {
            ...requestHeaders,
            Authorization: `Token ${token}`
        };

        const url = `${API_URL}${path}`;

        const requestConfig: AxiosRequestConfig = {
            url,
            method,
            headers,
            data: body,
            ...options
        };
        if (typeof params === 'string') {
            requestConfig.url += `?${params}`;
        } else {
            if (params) {
                let req: string | undefined = undefined;
                Object.keys(params).forEach(key => {
                    const array = params[key];
                    if (Array.isArray(array)) {
                        if (!req) {
                            req = `?${key}=`;
                        }
                        req = req.concat(array.join(`&${key}=`))
                        delete params[key];
                    }
                });
                if (req) {
                    requestConfig.url += req;
                }
            }
            requestConfig.params = params;
        }

        return axios.request<Promise<T>>(requestConfig)
            .then((response): Promise<T> => {
                return response.data;
            })
            .catch(error => this.onError(error?.response));
    }
}