import Vue from 'vue'
import App from './App.vue'


// import Disposable from "../../dist/disposable-email-blocker-vue-2.min";

import Disposable from "../../src/index.ts";

Vue.use(Disposable, {});

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
