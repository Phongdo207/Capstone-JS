function Api() {
  this.callApi = function (uri, method, data) {
    var url = "https://64709e2f3de51400f724a027.mockapi.io";
    return axios({
      url: `${url}/${uri}`,
      method: method,
      data: data,
    });
  };
}
