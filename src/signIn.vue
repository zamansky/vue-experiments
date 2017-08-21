<template>
    
    <v-card>
	<v-container>
	<form>
	    
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
                       
	 }

     },
     components:{

     }
 }
 
</script>

<style scoped>

</style>
