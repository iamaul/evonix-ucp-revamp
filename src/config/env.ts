export const APP_VERSION = process.env.NEXT_PUBLIC_APP_VERSION ?? "";

export const BASE_API_URL = process.env.NEXT_PUBLIC_BASE_API_URL ?? "";

export const ROUTES = {
  home: {
    path: "/",
  },
  server: {
    path: "/server",
  },
  posts: {
    path: "/posts",
  },
  contentCreator: {
    path: "/content-creator",
  },
  help: {
    faq: {
      path: "/help/faq",
    },
    client: {
      path: "/help/client",
    },
  },
  login: {
    path: "/login",
  },
  register: {
    path: "/register",
  },
} as const;
