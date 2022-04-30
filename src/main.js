import Vue from 'vue'
import App from './App.vue'
import router from './router'
import vuetify from './plugins/vuetify'
import './plugins/axios'
import { initializeApp } from "firebase/app";

Vue.config.productionTip = false

const firebaseConfig = {
  apiKey: "AIzaSyD6tWC98DGe4FF3o2GdRRIeIR9JBO5Egi4",
  authDomain: "ptapp-1817e.firebaseapp.com",
  databaseURL: "https://ptapp-1817e-default-rtdb.firebaseio.com",
  projectId: "ptapp-1817e",
  storageBucket: "ptapp-1817e.appspot.com",
  messagingSenderId: "733445219828",
  appId: "1:733445219828:web:2dcfb28879582ce8dcc5a1",
  measurementId: "G-PJEDZEM0P3"
};

const app = initializeApp(firebaseConfig);

new Vue({
  router,
  vuetify,
  render: h => h(App)
}).$mount('#app')
