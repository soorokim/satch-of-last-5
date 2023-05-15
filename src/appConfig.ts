type AppConfig = {
  authApiBase: string;
  goalsApiBase: string;
  satchsApiBase: string;
};

const baseUrl =
  process.env.NODE_ENV === 'test'
    ? process.env.VITE_SATCH_FRONTEND_URL
    : process.env.VITE_SATCH_BACKEND_URL;

const appConfig: AppConfig = {
  authApiBase: `${baseUrl}/auth`,
  goalsApiBase: `${baseUrl}/goals`,
  satchsApiBase: `${baseUrl}/satchs`,
};

export default appConfig;
