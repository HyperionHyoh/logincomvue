"use strict";

var _vue = _interopRequireDefault(require("vue"));

var _axios = _interopRequireDefault(require("axios"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

//axios.defaults.baseURL = 'https://ptapp-1817e-default-rtdb.firebaseio.com/'
//axios.defaults.headers.common['Authorization']= 'abc123'
//axios.defaults.headers.get['Accepts']= 'application/json'
_vue["default"].use({
  install: function install(Vue) {
    //Vue.prototype.$http = axios
    Vue.prototype.$http = _axios["default"].create({
      baseURL: 'https://ptapp-1817e-default-rtdb.firebaseio.com/'
      /* headers:{
               "Authorization": "teste"
       }*/

    });
    Vue.prototype.$http.interceptors.request.use(function (config) {
      console.log(config.method);
      return config;
    }, function (error) {
      return Promise.reject(error);
    });
    Vue.prototype.$http.interceptors.response.use(function (res) {
      /* const array = []
       for(let chave in res.data){
          // array.push({ id: chave, nome: res.data[chave].nome, email: res.data[chave].email})
          array.push({ id: chave, ...res.data[chave]})
       }
       res.data = array*/
      return res;
    }, function (error) {
      return Promise.reject(error);
    });
  }
});
//# sourceMappingURL=axios.dev.js.map
