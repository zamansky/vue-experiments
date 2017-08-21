<template>
    <v-app light>
        
	<v-toolbar light fixed>
	    
	  <v-toolbar-title>My App</v-toolbar-title>

	  <v-spacer></v-spacer>
	  <v-toolbar-items class="hidden-xs-only">
              <v-btn
		  v-for="item in menuItems"
		  :key="item.title"
		  :to="item.link">
		  <v-icon left dark>{{ item.icon }}</v-icon>
		  {{ item.title }}

              </v-btn>
	  </v-toolbar-items>
      </v-toolbar>
    <main>
        	<router-view></router-view>
    </main>
  </v-app>
</template>

<script>

import * as firebase from 'firebase'

  // Initialize Firebase
  var config = {
    apiKey: "AIzaSyCt3oUm6fKqQtXfkeWS6r2yZmJLtaYDqlk",
    authDomain: "vue-test-project-67035.firebaseapp.com",
    databaseURL: "https://vue-test-project-67035.firebaseio.com",
    projectId: "vue-test-project-67035",
    storageBucket: "vue-test-project-67035.appspot.com",
    messagingSenderId: "571176538810"
  };
  firebase.initializeApp(config);
    

 
 export default {
     created:function() {

     },
     computed : {
	 menuItems: function(){
	     return [
		 {icon: 'home', title: 'Home', link: '/'},
                 {icon: 'bug_report', title: 'Dummy', link: '/dummy'},
                 {icon: 'person', title: 'Profile', link: '/profile'},
		 {icon: 'face', title: 'Sign up', link: '/signup'},
                 {icon: 'lock_open', title: 'Sign in', link: '/signin'},
		 {icon:'', title: 'Logout', link: '/logout'}
                 
	     ];
	 }

     }
 }

</script>

<style lang="stylus">
  @import './stylus/main'
</style>
