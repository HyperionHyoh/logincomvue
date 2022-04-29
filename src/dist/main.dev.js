"use strict";

var _vue = _interopRequireDefault(require("vue"));

var _App = _interopRequireDefault(require("./App.vue"));

var _router = _interopRequireDefault(require("./router"));

var _vuetify = _interopRequireDefault(require("./plugins/vuetify"));

require("./plugins/axios");

var _app = require("firebase/app");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

_vue["default"].config.productionTip = false;
var firebaseConfig = {
  apiKey: "AIzaSyD6tWC98DGe4FF3o2GdRRIeIR9JBO5Egi4",
  authDomain: "ptapp-1817e.firebaseapp.com",
  databaseURL: "https://ptapp-1817e-default-rtdb.firebaseio.com",
  projectId: "ptapp-1817e",
  storageBucket: "ptapp-1817e.appspot.com",
  messagingSenderId: "733445219828",
  appId: "1:733445219828:web:2dcfb28879582ce8dcc5a1",
  measurementId: "G-PJEDZEM0P3"
};
var app = (0, _app.initializeApp)(firebaseConfig);
new _vue["default"]({
  router: _router["default"],
  vuetify: _vuetify["default"],
  render: function render(h) {
    return h(_App["default"]);
  }
}).$mount('#app');
//# sourceMappingURL=main.dev.js.map
