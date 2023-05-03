/* eslint-disable max-classes-per-file */
/* eslint-disable no-shadow */
import appConfig from '../../appConfig';
import { IApiClient } from '../api/ApiClient';
import { AccessTokenData, AccessTokenRequest, AccessTokenResponse } from './types';

export interface IKakaoOAuthApiClient {
  accessToken(payload: AccessTokenRequest): Promise<AccessTokenData | undefined>;
}

export class KakaoOAuthApiClient implements IKakaoOAuthApiClient {
  apiBase: string;

  kakaoOAuthApiClient: IApiClient;

  constructor(kakaoOAuthApiClient: IApiClient) {
    this.apiBase = appConfig.authApiBase;
    this.kakaoOAuthApiClient = kakaoOAuthApiClient;
  }

  async accessToken({ code }: AccessTokenRequest): Promise<AccessTokenData | undefined> {
    try {
      const grant_type = 'authorization_code';
      const client_id = process.env.VITE_KAKAO_CLIENT_KEY;
      const response = await this.kakaoOAuthApiClient.post<undefined, AccessTokenResponse>(
        `https://kauth.kakao.com/oauth/token?grant_type=${grant_type}&client_id=${client_id}&redirect_uri=${process.env.VITE_SATCH_FRONTEND_URL}/oauth&code=${code}`,
        undefined,
      );

      if (response) {
        return { accessToken: response.access_token };
      }
    } catch (exception) {
      console.error(exception);
    }
  }
}

export default class KakaoOAuthService {
  kakaoOAuthApiClient: IKakaoOAuthApiClient;

  constructor(kakaoOAuthApiClient: IKakaoOAuthApiClient) {
    this.kakaoOAuthApiClient = kakaoOAuthApiClient;
  }

  accessToken(payload: AccessTokenRequest): Promise<AccessTokenData | undefined> {
    return this.kakaoOAuthApiClient.accessToken(payload);
  }
}
