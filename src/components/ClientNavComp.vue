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
                    <router-link to="/ClientProfileView">Profile Page</router-link>
                </v-list-item>
                <v-list-item>
                    <router-link to="/ClientView">Begin Ordering</router-link>
                </v-list-item>
                <v-list-item>
                    <v-btn @click="handleClientTokenDestroy">Logout</v-btn>
                </v-list-item>
            </v-list>
        </v-menu>
    </div>
</template>

<script>
import { useCallingApiStore } from '@/stores/callingapi'
import {mapActions} from 'pinia'


    export default {
        name : 'ClientNavComp',


        methods: {
        ...mapActions(useCallingApiStore, ['clientTokenDestroy']),
            handleClientTokenDestroy() {
                console.log('It worked');
                this.clientTokenDestroy();
                
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