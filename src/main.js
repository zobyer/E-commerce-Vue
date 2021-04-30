import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import VueParticles from 'vue-particles'

import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { fab } from '@fortawesome/free-brands-svg-icons'


library.add(fas)
library.add(fab)



createApp(App).use(router).use(VueParticles).component('font-awesome-icon', FontAwesomeIcon).mount('#app')
