import { t as defineStore, C as navigateTo, F as ElMessage, D as useNuxtApp } from './server.mjs';
import { ref } from 'vue';
import { y as klona, z as parse, A as getRequestHeader, B as destr, C as isEqual, D as setCookie, E as getCookie, F as deleteCookie } from '../runtime.mjs';
import { g as getApiBaseUrl } from './utils-U-D2mQHl.mjs';

function useRequestEvent(nuxtApp = useNuxtApp()) {
  var _a;
  return (_a = nuxtApp.ssrContext) == null ? void 0 : _a.event;
}
const CookieDefaults = {
  path: "/",
  watch: true,
  decode: (val) => destr(decodeURIComponent(val)),
  encode: (val) => encodeURIComponent(typeof val === "string" ? val : JSON.stringify(val))
};
function useCookie(name, _opts) {
  var _a2;
  var _a;
  const opts = { ...CookieDefaults, ..._opts };
  const cookies = readRawCookies(opts) || {};
  let delay;
  if (opts.maxAge !== void 0) {
    delay = opts.maxAge * 1e3;
  } else if (opts.expires) {
    delay = opts.expires.getTime() - Date.now();
  }
  const hasExpired = delay !== void 0 && delay <= 0;
  const cookieValue = klona(hasExpired ? void 0 : (_a2 = cookies[name]) != null ? _a2 : (_a = opts.default) == null ? void 0 : _a.call(opts));
  const cookie = ref(cookieValue);
  {
    const nuxtApp = useNuxtApp();
    const writeFinalCookieValue = () => {
      if (opts.readonly || isEqual(cookie.value, cookies[name])) {
        return;
      }
      writeServerCookie(useRequestEvent(nuxtApp), name, cookie.value, opts);
    };
    const unhook = nuxtApp.hooks.hookOnce("app:rendered", writeFinalCookieValue);
    nuxtApp.hooks.hookOnce("app:error", () => {
      unhook();
      return writeFinalCookieValue();
    });
  }
  return cookie;
}
function readRawCookies(opts = {}) {
  {
    return parse(getRequestHeader(useRequestEvent(), "cookie") || "", opts);
  }
}
function writeServerCookie(event, name, value, opts = {}) {
  if (event) {
    if (value !== null && value !== void 0) {
      return setCookie(event, name, value, opts);
    }
    if (getCookie(event, name) !== void 0) {
      return deleteCookie(event, name, opts);
    }
  }
}
const useAuthStore = defineStore("auth", {
  state: () => ({
    userDetails: null,
    authenticated: false,
    isLoading: true
  }),
  actions: {
    loadFromLocalStorage() {
      {
        this.authenticated = false;
        this.userDetails = {};
      }
    },
    async authStart() {
      this.loading = true;
      const data = await $fetch(`${getApiBaseUrl()}users/oauth_start`, {
        method: "GET"
      });
      console.log("redirect url", data);
      await navigateTo(data.url, { external: true });
    },
    async autUser(code) {
      try {
        const response = await $fetch(
          `${getApiBaseUrl()}users/oauth-callback`,
          {
            method: "GET",
            query: { code }
          }
        );
        ElMessage({
          message: "Successfully logged in",
          type: "success"
        });
        const refreshToken = useCookie("refreshToken", {
          maxAge: 60 * 60 * 24 * 2
        });
        refreshToken.value = response.refresh;
        const accessToken = useCookie("accessToken", {
          maxAge: 60 * 60 * 24
        });
        accessToken.value = response.access;
        const user = useCookie("user", { maxAge: 60 * 60 * 24 });
        user.value = JSON.stringify(response.user);
        this.authenticated = true;
        localStorage.setItem("authDetails", JSON.stringify(response));
        return true;
      } catch (error) {
        ElMessage({
          message: error.message || "Authentication failed",
          type: "error"
        });
        return false;
      } finally {
        this.isLoading = false;
      }
    },
    async logout() {
      try {
        const refreshToken = useCookie("refreshToken");
        const accessToken = useCookie("accessToken");
        const user = useCookie("user");
        refreshToken.value = null;
        accessToken.value = null;
        user.value = null;
        this.authenticated = false;
        ElMessage({
          message: "Successfully logged out",
          type: "success"
        });
        localStorage.removeItem("authDetails");
        navigateTo("/");
        return true;
      } catch (error) {
        ElMessage({
          message: error.message || "Logout failed",
          type: "error"
        });
        return false;
      }
    }
  }
});

export { useAuthStore as u };
//# sourceMappingURL=authStore-ajW-SPS-.mjs.map
