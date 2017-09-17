<template>
    
    <v-card>
	<v-container>
	<form>

	    <v-layout row>
		<v-flex xs3 offset-xs3>
		    <v-btn v-on:click="loginGoogle">
			Login with Google
		    </v-btn>

		</v-flex>
	    </v-layout>


	    <v-layout row>
                    <v-flex xs3 offset-xs3>
			<v-text-field
			    v-model="email"
				     name="email"
			    label="email"
				     id="email"
			></v-text-field>
		    </v-flex>
		</v-layout>

                <v-layout row>
                    <v-flex xs3 offset-xs3>
			<v-text-field
			    v-model="password"
				     type="password"
				     name="password"
			    label="password"
				     id="password"
			></v-text-field>
		    </v-flex>
		</v-layout>

		<v-layout row>
                    <v-flex xs3 offset-xs3>
			<v-btn v-on:click="signIn" >Submit</v-btn>
		    </v-flex>
		</v-layout>
                
	</form>
		    </v-container>
    </v-card>
</template>


<script>
import * as firebase from 'firebase'

 export default {
     name :'',
     data : function(){
	 return {
	     email:'',
	     password:''
	 }
     },
     methods: {
	 signIn: function(){
	     var self=this;
             this.$store.dispatch('signIn',{email:this.email,password:this.password}).then(function(d){
		 console.log("HELLO WORLD")
		 console.log(self.$store.getters.isAuthenticated);
                 if (self.$store.getters.isAuthenticated){
		     self.$router.push("/");
		     
		 }
	     })
                       
	 },
	 loginGoogle: function(){
	     var self=this;
	     var provider = new firebase.auth.GoogleAuthProvider();
	     firebase.auth().signInWithPopup(provider).then(function(result) {
  // This gives you a Google Access Token. You can use it to access the Google API.
		 var token = result.credential.accessToken;
		 // The signed-in user info.
		     var user = result.user;
		 console.log(user.email);
		 console.log("About to dispatch")
		 self.$store.dispatch("signInGoogle",{email:user.email,password:""}).then(function(d){
		     console.log("disaptchdone")
		     if (self.$store.getters.isAuthenticated){
		     self.$router.push("/")};
		 });
		 
	     }).catch(function(error) {
                 console.log("ERROR")
		     var errorCode = error.code;
		 var errorMessage = error.message;
		 // The email of the user's account used.
		     var email = error.email;
		 // The firebase.auth.AuthCredential type <th></th>at was used.
		     var credential = error.credential;
                 
	     });

	 }

     },
     components:{

     }
 }
 
</script>

<style scoped>

</style>
