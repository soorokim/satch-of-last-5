import ApiClient from './core/api/ApiClient';
import { ApiConfiguration } from './core/api/ApiConfiguration';
import AuthService, { AuthApiClient } from './core/auth/AuthService';
import GoalsService, { GoalsApiClient } from './core/goals/GoalsService';
import KakaoOAuthService, { KakaoOAuthApiClient } from './core/kakaoOAuth/KakaoOAuthService';
import SatchsService, { SatchsApiClient } from './core/satchs/SatchsService';

// satch API
const authApiConfig = new ApiConfiguration();

authApiConfig.withCredentials = true;
const apiClient = new ApiClient(authApiConfig);

const authApiClient = new AuthApiClient(apiClient);

export const authService = new AuthService(authApiClient);

const goalApiClient = new GoalsApiClient(apiClient);

export const goalsService = new GoalsService(goalApiClient);

const satchsApiClient = new SatchsApiClient(apiClient);

export const satchsService = new SatchsService(satchsApiClient);

// kakao API
const kakaoOAuthApiConfig = new ApiConfiguration();
const kakaoOAuthApiClient = new KakaoOAuthApiClient(new ApiClient(kakaoOAuthApiConfig));

export const kakaoOAuthService = new KakaoOAuthService(kakaoOAuthApiClient);
