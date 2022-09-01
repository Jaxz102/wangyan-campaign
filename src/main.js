import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'





createApp(App).use(store).use(router).mount('#app')



// if(localStorage.getItem("language") == null){
//     localStorage.setItem("language", 0);
// }

// store.state.lang = localStorage.getItem("language");


