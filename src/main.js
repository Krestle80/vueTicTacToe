import { createApp } from 'vue'
import App from './App.vue'
import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faO } from '@fortawesome/free-solid-svg-icons'
library.add(faO)
import {faX} from '@fortawesome/free-solid-svg-icons'
library.add(faX)


/* add font awesome icon component */
createApp(App)
    .component('font-awesome-icon', FontAwesomeIcon)
    .mount('#app')
