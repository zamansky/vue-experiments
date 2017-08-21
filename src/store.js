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
	},
	logout: function(state,payload){
	    state.user=null;
	    state.isAuthenticated = false;
	}
    },
    actions:{
	signIn : function(context,payload){
            return new Promise((resolve,reject)=>{
            firebase.auth().signInWithEmailAndPassword(payload.email,payload.password)
		.then(function(r){
		    console.log(r);
		    console.log("SUCCEDED")
		    context.commit('signIn',payload)
		    resolve();
                    
		}).catch(function(error){
		    console.log("FAILED")
		    console.log(error);
                    resolve();
		});}
			      )
            
            
	},
	logout : function(context,payload){
	    firebase.auth().signOut().then(function(){
                		context.commit('logout');
	    }).catch(function(error){
		context.commit('logout');
	    });
		

	}
    }
});
