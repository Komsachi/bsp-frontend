import { createApp } from 'vue'
import router from './router'

import App from "./App.vue";

// ### Element-UI ###
import ElementPlus from 'element-plus';
import 'element-plus/lib/theme-chalk/index.css';
// ######################

createApp(App)
    .use(router)
    .use(ElementPlus)
    .mount('#app')
