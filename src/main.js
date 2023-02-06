import { createApp } from 'vue'
import App from './App.vue'
import router from './router';

//import './theme/variables.css';
//import './theme/core.css';
//import BaseLayout from './components/base/BaseLayout.vue';
import store from './store/index.js';

const app = createApp(App)
  .use(router)
  .use(store);

//app.component('base-layout', BaseLayout);

router.isReady().then(() => {
  app.mount('#app');
});