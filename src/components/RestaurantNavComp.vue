<template>
    <div>
        <v-menu offset-y>
            <template v-slot:activator="{ on, attrs }">
            <v-btn
                width="150"
                elevation="7"
                color="primary"
                dark
                v-bind="attrs"
                v-on="on"
            >
            Go to ?
            </v-btn>
            </template>
            <v-list>
                <v-list-item>
                    <router-link to="/RestaurantView">Create Your Menu</router-link>
                </v-list-item>
                <v-list-item>
                    <router-link to="/RestaurantProfileView">Profile Page</router-link>
                </v-list-item>
                <v-list-item>
                    <v-btn @click="handleTokenDestroy">Logout</v-btn>
                </v-list-item>
            </v-list>
        </v-menu>
    </div>
</template>

<script>
import { useCallingApiStore } from '@/stores/callingapi'
import {mapActions} from 'pinia'


    export default {
        name : 'RestaurantNavComp',

        methods: {
        ...mapActions(useCallingApiStore, ['restaurantTokenDestroy']),
            handleTokenDestroy() {
                console.log('It worked');
                this.restaurantTokenDestroy();
                
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

</style>