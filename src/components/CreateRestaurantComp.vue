<template>
    <div id="container">
        <v-container>
        <NavComp/>
        <h1 class="text-center">Restaurant Sign Up</h1>
        <v-text-field
            v-model="name"
            append-icon="mdi-factory"
            label="Company Name"
            outlined
        ></v-text-field>
        <v-text-field
            v-model="phoneNum"
            append-icon="mdi-phone-dial"
            label="Company Phone Number"
            outlined
        ></v-text-field>
        <v-text-field
            v-model="address"
            append-icon="mdi-city-variant-outline"
            label="Where are you located?(Address here)"
            outlined
        ></v-text-field>
        <v-text-field
            v-model="city"
            append-icon="mdi-city-variant-outline"
            label="Where are you located?(City location here)"
            outlined
        ></v-text-field>
        <v-textarea 
            v-model="bio"
            label="Tell us a bit about your company"
            append-outer-icon="mdi-bio"
            outlined
        >
        </v-textarea>
        <v-text-field
            v-model="email"
            outlined
            label="Enter Email"
            append-outer-icon="mdi-email"
        ></v-text-field>
        <v-text-field 
            v-model="password"
            hint="At least 8 characters"
            outlined
            label="Enter Password"
            append-outer-icon="mdi-lock"
        ></v-text-field>
        <h3 class="text-center">We appreciate you signing up ...</h3>
        <h3 class="text-center">MAY WE BOTH BENEFIT</h3>
        <v-btn width="200"
        color="primary"
        elevation="9"
        @click="handleRestaurantCreated"
        >
            Create
        </v-btn>
        </v-container>
    </div>
</template>

<script>
import NavComp from '@/components/NavComp.vue'
import { useCallingApiStore } from '@/stores/callingapi'
import {mapActions} from 'pinia'


    export default {
        name : 'CreateRestaurantComp',
        components: {
            NavComp,
        },

        data :() => ({
            name : '',
            address : '',
            bio : '',
            city : '',
            email : '',
            password : '',
            phoneNum: '',
        }),

        methods : {
            ...mapActions(useCallingApiStore, ['restaurantCreateApi']),
            handleRestaurantCreated() {
                this.restaurantCreateApi(this.name, this.address, this.bio, this.city, this.email, this.password, this.phoneNum,);
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