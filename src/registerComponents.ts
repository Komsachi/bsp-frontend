import {AppLink} from "@/components/common";
import {App} from "vue";


const registerComponents = (app: App) => {
    app.component('AppLink', AppLink)
}

export default registerComponents