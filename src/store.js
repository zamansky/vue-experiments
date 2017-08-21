import Vue from 'vue'
import Vuex from 'vuex'
import * as firebase from 'firebase'

Vue.use(Vuex)

export const store = new Vuex.Store({
    state: { 
	isAuthenticated : false,
	user : null
    },
    getters:{
	isAuthenticated : function(state){
	    return state.isAuthenticated;
	}
    },
    mutations:{},
    actions:{}
});
