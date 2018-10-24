import Vue from "vue";

//IMPORT ROUTER
import VueRouter from "vue-router";
import AppRoutes from "./router/routes";

Vue.use(VueRouter);

//INIT ROUTER WITH ROUTES DEFINED IN AppRoutes FILEIN ROUTER FOLDER
const appRouter: VueRouter = new VueRouter({
    routes: AppRoutes
});

//IMPORT VUEX
import Vuex from "vuex";
import store from "./store/store";

//INIT APP TO APP.VUE COMPONENT
import App from './App.vue'

let vueInstance = new Vue({
    el: '#app',
    template: '<App/>',
    store,
    router: appRouter,
    components: { App },
  })
 
