import Vue from 'vue'
import App from './App.vue'
import Vuetify from 'vuetify'
import VueRouter from 'vue-router'
import Vuex from 'vuex'
import {store} from './store.js'
import home from './home.vue'
import profile from './profile.vue'
import signIn from './signIn.vue'
import signUp from './signUp.vue'
import dummy from './dummy.vue'

Vue.use(Vuetify);

var protect = function(to,from,next){
    console.log(vue.$store.getters.isAuthenticated);
    console.log(to.fullPath);
    console.log(from);
    
    if (vue.$store.getters.isAuthenticated){
	return next();
    } else {
	return next("/signIn")
    }
};




var logout = function(to, from, next){
    vue.$store.dispatch('logout');
    return next('/');
};


const routes = [
    {path:'/', component:home},
    {path:'/profile', component:profile,beforeEnter:protect},
    {path:'/dummy', component:dummy,beforeEnter:protect},
    {path:'/signin', component:signIn},
    {path:'/signup', component:signUp},
    {path:'/logout', beforeEnter:logout}
];


const router = new VueRouter({routes:routes});

Vue.use(VueRouter)
Vue.use(Vuetify)
Vue.use(Vuex)




var vue = new Vue({
    el: '#app',
    router,
    store,
  render: h => h(App)
})
