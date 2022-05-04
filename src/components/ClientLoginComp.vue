<template>
<div id="container">
  <div>
    <v-container>
      <NavComp/>
      <h1>Login Here</h1>
      <v-text-field
      v-model="email"
        label="Enter Email"
        append-outer-icon="mdi-email"
      ></v-text-field>
      <v-text-field 
      v-model="password"
        label="Enter Password"
        append-outer-icon="mdi-lock"
      ></v-text-field>
      <v-btn 
        width="200"
        color="primary"
        elevation="9"
        @click="handleClientLogin"
      >
        Login
      </v-btn>
    </v-container>
  </div>
</div>
</template>


<script>
  import NavComp from './NavComp.vue';
  import { useCallingApiStore } from '@/stores/callingapi'
  import {mapActions} from 'pinia'


  export default {
    components: { NavComp },
    name: 'HelloWorld',

    data :() => ({
        email : '' ,
        password : '' ,
    }),

    computed: {
      
    },

    methods: {
    ...mapActions(useCallingApiStore, ['clientLoginApi']),
          handleClientLogin() {
                this.clientLoginApi(this.email, this.password,);
        
      }
    },

    mounted () {
      useCallingApiStore().$onAction(({name, after})=>{
        if (name == "userRegisterAlert"){
            console.log("handling");
            after((response)=>{
            this.handleError(response);
            })
          }
      });
    }
  }
</script>


<style  scoped>
#container {
      color: gold;
      background-color: #D62323;
  }
    h1 {
      text-align: center;
    }
</style>