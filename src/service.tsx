/* eslint-disable import/prefer-default-export */
import ApiClient from './core/api/ApiClient';
import { ApiConfiguration } from './core/api/ApiConfiguration';
import AuthService, { AuthApiClient } from './core/auth/AuthService';


const authApiConfig = new ApiConfiguration();

const authApiClient = new AuthApiClient(new ApiClient(authApiConfig));

export const authService = new AuthService(authApiClient);
