import Vue from "vue";
import VueRouter from 'vue-router'

//MAKE SURE TO IMPORT COMPONENTS FPR DECLARATION ON PATHS BELOW
import MainView from './../components/mainView.vue'
import ChildView from './../components/childView.vue'

Vue.use(VueRouter);

//DECLARE/MAP ROUTES HERE
const routes = [
  { path: '/', component: MainView },
  { path: '/ChildView', component: ChildView }
]

export default routes;