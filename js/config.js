const config = {
  // apiBase: "https://type.fit/",
  apiBase: "https://api.forismatic.com/",

  createRequest(endPoint, method, headers, data) {
    const options = this.createOptions(method, headers, data);
    const result = fetch(this.apiBase + endPoint, options);
    return result;
  },

  createOptions(method, headers, data) {
    const options = {};
    if (headers) options.headers = headers;
    if (data) options.data = data;
    options.method = method;
    return options;
  },
};
export default config;
