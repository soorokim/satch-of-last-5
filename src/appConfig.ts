type AppConfig = {
  authApiBase: string;
  goalsApiBase: string;
  satchsApiBase: string;
};

const { VITE_SATCH_BACKEND_URL } = process.env;

const appConfig: AppConfig = {
  authApiBase: `${VITE_SATCH_BACKEND_URL}/auth`,
  goalsApiBase: `${VITE_SATCH_BACKEND_URL}/goals`,
  satchsApiBase: `${VITE_SATCH_BACKEND_URL}/satchs`,
};

export default appConfig;
