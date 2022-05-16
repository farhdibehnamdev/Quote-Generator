const config = {
  apiBase: "https://quotes.rest/",

  createRequest(endPoint, method, headers, data) {
    const options = this.createOptions(method, headers, data);
    return fetch(this.apiBase + endPoint, options);
  },

  createOptions(method, headers, data) {
    const options = {};
    if (headers) options.headers = headers;
    if (data) options.data = data;
    options.method = method;
    return options;
  },
};
