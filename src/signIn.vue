<template>
    
    <v-card>
	<v-container>
	<form>
	    
            	<v-layout row>
                    <v-flex xs3 offset-xs3>
			<v-text-field
			    v-model="username"
				     name="username"
			    label="Username"
				     id="username"
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
	     username:'',
	     password:''
	 }
     },
     methods: {
	 signIn: function(){
	     alert("LOGGING");
	 }

     },
     components:{

     }
 }
 
</script>

<style scoped>

</style>
