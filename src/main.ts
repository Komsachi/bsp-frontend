import { createApp } from 'vue'
import App from './App.vue'

// ### Element-UI ###
import ElementPlus from 'element-plus';
import 'element-plus/lib/theme-chalk/index.css';
// ######################

const app = createApp(App)
app.use(ElementPlus)
app.mount('#app')
