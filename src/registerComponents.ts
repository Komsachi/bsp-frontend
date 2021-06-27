import {AppLink} from "@/components/common";
import {App} from "vue";

export {AppLink};

export default {
    install(Vue: App) {
        Vue.component('AppLink', AppLink);
    }
}