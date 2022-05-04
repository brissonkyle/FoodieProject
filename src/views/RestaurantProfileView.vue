<template>
    <div>
        <v-toolbar
            dark
        >
        <RestaurantNavComp/>
        <v-spacer></v-spacer>
        <v-toolbar-title>
            <h2>Edit Profile</h2>
        </v-toolbar-title>
        <v-spacer></v-spacer>
    </v-toolbar>
    <v-container>
        <v-text-field
            v-model="name"
            append-icon="mdi-factory"
            label="Edit Company Name"
            outlined
        ></v-text-field>
        <v-text-field
            v-model="phoneNum"
            append-icon="mdi-phone-dial"
            label="Edit Company Phone Number"
            outlined
        ></v-text-field>
        <v-text-field 
            v-model="address"
            append-icon="mdi-city-variant-outline"
            label="Edit location or Add?(Address here)"
            outlined
        ></v-text-field>
        <v-text-field 
            v-model="city"
            append-icon="mdi-city-variant-outline"
            label="Edit City location or Add?(City location here)"
            outlined
        ></v-text-field>
        <v-textarea 
            v-model="bio"
            label="Edit Company Bio"
            append-outer-icon="mdi-bio"
            outlined
        >
        </v-textarea>
        <v-text-field 
            v-model="password"
            hint="At least 8 characters"
            outlined
            label="Edit Password"
            append-outer-icon="mdi-lock"
        ></v-text-field>
        <v-btn 
            width="200"
            color="primary"
            elevation="9"
            @click="handleRestaurantUpdate"
        >
        Update Info
        </v-btn>
        </v-container>
    </div>
</template>

<script>
import RestaurantNavComp from '@/components/RestaurantNavComp.vue'
import { useCallingApiStore } from '@/stores/callingapi'
import {mapActions} from 'pinia'


    export default {
        name : 'RestaurantProfileView',
        components: {
            RestaurantNavComp,
        },

        methods: {
        ...mapActions(useCallingApiStore, ['restaurantUpdateApi']),
            handleRestaurantUpdate() {
                this.restaurantUpdateApi( this.name, this.address, this.bio, this.city, this.password, this.phoneNum );
        
        }
    },


    data :() => ({
        name : '',
        address: '',
        bio : '',
        city : '',
        password: '',
        phoneNum : '',
    }),

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