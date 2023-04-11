type AppConfig = {
  accessToken?: string;
  authApiBase: string;
};

const { VITE_SATCH_BACKEND_URL } = import.meta.env;

const appConfig = {
  authApiBase: `${VITE_SATCH_BACKEND_URL}/auth`,
  satchApiBase: `${VITE_SATCH_BACKEND_URL}/satch`,
  itemApiBase: `${VITE_SATCH_BACKEND_URL}/item`,
} as AppConfig;

export default appConfig;
