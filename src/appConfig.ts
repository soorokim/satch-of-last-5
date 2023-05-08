type AppConfig = {
  authApiBase: string;
  goalsApiBase: string;
  satchsApiBase: string;
};

const { VITE_SATCH_FRONTEND_URL, VITE_SATCH_BACKEND_URL } = process.env;

const baseUrl = process.env.NODE_ENV === 'test' ? VITE_SATCH_FRONTEND_URL : VITE_SATCH_BACKEND_URL;

const appConfig: AppConfig = {
  authApiBase: `${baseUrl}/auth`,
  goalsApiBase: `${baseUrl}/goals`,
  satchsApiBase: `${baseUrl}/satchs`,
};

export default appConfig;
