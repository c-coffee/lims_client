import Vue from 'vue'
import ElementUI  from 'element-ui'
import router from './router'
import store from './store'
import App from './App.vue'
import axios from 'axios'

import './assets/css/reset.css'

import 'element-ui/lib/theme-default/index.css'

Vue.use(ElementUI);
Vue.prototype.$ajax = axios;

new Vue({
    el: '#app',
    router,
    store,
    render: h => h(App)
});
