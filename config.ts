// @ts-nocheck
const FRONTND_URL = import.meta.env.VITE_APP_FRONT_URL;
const BACKEND_URL = import.meta.env.VITE_APP_BACKEND_URL;

// 在需要的地方进行不同的配置即可
const config = {
  deploy: {
    development: {
      backend: BACKEND_URL || "http://10.130.9.105:30003",
      // backend: "http://10.130.244.70:8082",
      frontend: FRONTND_URL || "//localhost:8140"
      //可以添加一些其他服务的地址
    },
    web: {
      backend: BACKEND_URL || "http://10.130.9.105:30003",
      frontend: FRONTND_URL || "/"
      //可以添加一些其他服务的地址
    },
    production: {
      backend: BACKEND_URL || "http://130.20.120.11",
      frontend: FRONTND_URL || "//localhost:8140"
      //可以添加一些其他服务的地址
    }
  }
};

export default config;
