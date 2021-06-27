import { createApp } from 'vue'
import router from './router'

import App from "./App.vue";

// ### Element-UI ###
import ElementPlus from 'element-plus';
import 'element-plus/lib/theme-chalk/index.css';
import registerComponents from "./registerComponents";
// ######################

const app = createApp(App)
    .use(router)
    .use(ElementPlus)
    .use(registerComponents)
    .mount('#app')


