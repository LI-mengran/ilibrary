import { createApp } from 'vue'
import router from "./router";
import App from './App.vue'
import '@/css/app.6b8b815b.css'
import '@/css/chunk-vendors.0b0c58b7.css'
import '../jquery-3.5.1/jquery-3.5.1.min.js'
import $ from 'jquery'
import dayjs from 'dayjs'
// import VueDatePicker from '@vuepic/vue-datepicker';
// import '@vuepic/vue-datepicker/dist/main.css'



createApp(App).use(router).mount("#app");