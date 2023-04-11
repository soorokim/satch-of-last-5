/* eslint-disable max-classes-per-file */
/* eslint-disable no-shadow */
import appConfig from '../../appConfig';
import { IApiClient } from '../api/ApiClient';
import { LoginRequest, LoginResponse } from './types';

export interface IAuthApiClient {
  login(payload: LoginRequest): Promise<LoginResponse | undefined>;
  refresh(): Promise<LoginResponse | undefined>;
}

export class AuthApiClient implements IAuthApiClient {
  apiBase: string;

  authApiClient: IApiClient;

  constructor(authApiClient: IApiClient) {
    this.apiBase = appConfig.authApiBase;
    this.authApiClient = authApiClient;
  }

  async login(payload: LoginRequest): Promise<LoginResponse | undefined> {
    try {
      const response = await this.authApiClient.post<LoginRequest, LoginResponse>(
        `${this.apiBase}/login`,
        payload,
        { withCredential: true },
      );

      return response;
    } catch (exception) {
      console.error(exception);
    }
  }

  async refresh(): Promise<LoginResponse | undefined> {
    try {
      const response = await this.authApiClient.get<LoginResponse>(`${this.apiBase}/refresh`);

      return response;
    } catch (exception) {
      console.error(exception);
    }
  }
}

export default class AuthService {
  authApiClient: IAuthApiClient;

  constructor(authApiClient: IAuthApiClient) {
    this.authApiClient = authApiClient;
  }

  login(accessToken: string, vendor: string): Promise<LoginResponse | undefined> {
    return this.authApiClient.login({ accessToken, vendor });
  }

  refresh(): Promise<LoginResponse | undefined> {
    return this.authApiClient.refresh();
  }
}
