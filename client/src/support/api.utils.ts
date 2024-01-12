import { appConfig } from "sw/appConfig";

const normalizeURL = (path: string) => {
  const host = appConfig.API_URL?.replace(/\/$/, "");
  const address = path.replace(/^\//, "");

  return `${host}/${address}`;
};

export const waitForMs = (ms: number): Promise<void> => {
  return new Promise((res) => {
    setTimeout(res, ms);
  });
};

const validateResponseStatus = async (response: Response) => {
  if (!response) {
    throw new Error("invalid response");
  }

  // const authToken = response.headers.get("Authorization");

  // if (authToken) {
  //   setAuthToken(authToken);
  // }

  if (response.status >= 400) {
    throw new Error("invalid request");
  }

  return response;
};

export const GET = (path: string, options?: any) => {
  return fetch(normalizeURL(path), options).then((res) =>
    validateResponseStatus(res)
  );
};

export const POST = (path: string, body: string, options?: any) => {
  return fetch(normalizeURL(path), {
    method: "POST",
    credentials: "same-origin",
    ...Object.assign(options, {
      headers: Object.assign(
        {
          Accept: "text/plain",
          "Content-Type": "application/x-www-form-urlencoded",
        },
        options?.headers || {}
      ),
    }),
    body,
  }).then((res) => validateResponseStatus(res));
};

export const POST_JSON = <T>(path: string, json: T, options?: any) => {
  return POST(
    path,
    JSON.stringify(json),
    Object.assign({
      headers: Object.assign(
        {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        options?.headers
      ),
      options,
    })
  );
};
