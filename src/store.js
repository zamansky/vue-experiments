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
    mutations:{
	signIn: function(state,payload){
	    state.user=payload;
	    state.isAuthenticated=true;
	}
    },
    actions:{
	signIn : function(context,payload){

            firebase.auth().signInWithEmailAndPassword(payload.email,payload.password)
		.then(function(r){
		    console.log(r);
		    context.commit('signIn',payload)
		}).catch(function(error){
		    console.log(error);
		});
	    
	}
    }
});
