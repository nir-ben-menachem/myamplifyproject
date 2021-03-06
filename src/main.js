import Vue from 'vue';
import App from './App.vue';
import Amplify from 'aws-amplify';
import '@aws-amplify/ui-vue';
import aws_exports from './aws-exports';

Amplify.configure(aws_exports);

import {BootstrapVue, BootstrapVueIcons} from 'bootstrap-vue';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-vue/dist/bootstrap-vue.css';
import router from './router'
Vue.use(BootstrapVue )
Vue.use(BootstrapVueIcons)

Vue.config.productionTip = false
new Vue({
    router,
    render: h => h(App)
}).$mount('#app')
