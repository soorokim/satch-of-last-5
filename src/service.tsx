import ApiClient from './core/api/ApiClient';
import { ApiConfiguration } from './core/api/ApiConfiguration';
import AuthService, { AuthApiClient } from './core/auth/AuthService';
import KakaoOAuthService, { KakaoOAuthApiClient } from './core/kakaoOAuth/KakaoOAuthService';

// other services you might want to set up...

const authApiConfig = new ApiConfiguration();

authApiConfig.withCredentials = true;
const authApiClient = new AuthApiClient(new ApiClient(authApiConfig));

const kakaoOAuthApiConfig = new ApiConfiguration();
const kakaoOAuthApiClient = new KakaoOAuthApiClient(new ApiClient(kakaoOAuthApiConfig));

export const authService = new AuthService(authApiClient);
export const kakaoOAuthService = new KakaoOAuthService(kakaoOAuthApiClient);
