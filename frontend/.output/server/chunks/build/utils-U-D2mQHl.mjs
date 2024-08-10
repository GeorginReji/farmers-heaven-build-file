import { m as useRuntimeConfig } from './server.mjs';

const getApiBaseUrl = () => {
  const config = useRuntimeConfig();
  return config.public.apiBase;
};

export { getApiBaseUrl as g };
//# sourceMappingURL=utils-U-D2mQHl.mjs.map
