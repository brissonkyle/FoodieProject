<template>
    <div id="container">
        <v-container>
        <NavComp/>
    <h1 class="text-center">Sign Up</h1>
        <v-text-field 
            outlined
            v-model="firstName"
            append-outer-icon="mdi-file-account"
            label="First Name"
            required
        ></v-text-field>
        <v-text-field 
            outlined
            v-model="lastName"
            append-outer-icon="mdi-file-account"
            label="Last Name"
            required
        ></v-text-field>
        <v-text-field
            outlined
            v-model="pictureUrl"
            append-outer-icon="mdi-account-tie"
            label="Picture URL"
        ></v-text-field>
        <v-text-field
            outlined
            v-model="username"
            append-outer-icon="mdi-account"
            label="Enter Username"
        ></v-text-field>
        <v-text-field
            outlined
            v-model="email"
            append-outer-icon="mdi-email"
            label="E-mail"
            required
        ></v-text-field>
        <v-text-field
            outlined
            v-model="password"
            append-outer-icon="mdi-lock"
            name="input-10-1"
            label="Password"
            hint="At least 8 characters"
        ></v-text-field>
        <v-btn
            width="200"
            color="primary"
            elevation="9"
            @click="handleClientCreated"
        >
            Create
        </v-btn>
    </v-container>
    </div>
</template>

<script>
import NavComp from './NavComp.vue'
import { useCallingApiStore } from '@/stores/callingapi'
import {mapActions} from 'pinia'


    export default {
        components: { NavComp },
        name  : 'CreateClientComp',

        data :() => ({
            email : '' ,
            username : '' ,
            firstName : '' ,
            lastName : '',
            password : '' ,
            pictureUrl : undefined
        }),


        methods : {
            ...mapActions(useCallingApiStore, ['clientCreatedApi']),
            handleClientCreated() {
                this.clientCreatedApi(this.email, this.username, this.firstName, this.lastName, this.password,);
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

<style lang="scss" scoped>
#container {
        color: gold;
        background-color: #D62323;
    }
</style>