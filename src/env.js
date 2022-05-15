export const dev = {
  BASE_URL: "http://api.destreamlabs.com",
  // BASE_URL: "http://api-psdnft.codesfortomorrow.tech",
  // BASE_URL: "http://cb35-223-236-4-26.ngrok.io"
};

const BASE = "http://api.destreamlabs.com/api";
export const url = (url) => {
  return `${BASE}${url}`;
};
