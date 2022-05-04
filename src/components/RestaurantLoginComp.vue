<template>
    <div>
        <div id="container">
            <v-container>
            <NavComp/>
            <h1>Company Sign In</h1>
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
                @click="handleRestaurantLogin"
            >
            Login
            </v-btn>
        </v-container>
        </div>
    </div>
</template>

<script>
import { useCallingApiStore } from '@/stores/callingapi'
import { mapActions } from 'pinia'
import NavComp from '@/components/NavComp.vue'


    export default {
        name : 'RestaurantLoginComp',
        components: {
            NavComp,
        },

        data :() => ({
            email : '' ,
            password : '' ,
        }),

        methods : {
            ...mapActions(useCallingApiStore, ['restaurantLoginApi']),
            handleRestaurantLogin() {
                this.restaurantLoginApi( this.email, this.password );
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
    h1 {
        text-align: center;
    }
}
</style>