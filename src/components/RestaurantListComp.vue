<template>
    <div>
        <v-btn @click="restaurantPopulate">View Some restaurants</v-btn>
            <v-card 
            v-for="restaurant in restaurantObject" :key='restaurant.restaurantId'
        class="mx-auto my-12"
        max-width="600"
        >

    <!-- <v-img v-for="imageUrl in menuObject" :key="imageUrl"
        height="250"
        src="imageUrl"
        >{{ this.imageUrl }}</v-img> -->

    <v-card-title>
        {{restaurant.name}}
        </v-card-title>

        <v-card-text>
            <v-row
            align="center"
            class="mx-0"
            >
            <v-rating
                :value="5"
                color="amber"
                dense
                half-increments
                readonly
                size="14"
            ></v-rating>

            <div class="grey--text ms-4">
                5 (413)
            </div>
        </v-row>

        <div class="my-4 text-subtitle-1">
        $ • Restaurant
        </div>

        <div></div>
        </v-card-text>

        <v-divider class="mx-4"></v-divider>

        <v-card-title 
            v-for="item in menuObject" :key="item.menuId">
            
            {{ item.name }} {{item.price}}
            <span>{{item.description}}</span>
            </v-card-title>

        <v-card-text>
                
                <p></p>
        </v-card-text>
        <v-btn
            @click="menuPopulate"
            color="primary"
            >Menu Search
        </v-btn>
    </v-card>
    </div>
</template>

<script>
import axios from 'axios'
import cookies from 'vue-cookies'
// import { useCallingApiStore } from '@/stores/callingapi'
// import { mapActions } from 'pinia'


    export default {
        name : 'RestaurantListComp',

        // methods : {
        //     ...mapActions(useCallingApiStore, ['ClientOrderApi']),
        //     handleClientOrder() {
        //         this.ClientOrderApi(  );
        //     }
        // },

        data() {
            return {
                name : '',
                address: "",
                bannerUrl: null,
                bio: "",
                city: "",
                email: "",
                phoneNum: "",
                profileUrl: null,
                restaurantObject : [],
                description : '',
                imageUrl : '',
                price : '',
                menuObject : []
            }
        },

        methods: {
            restaurantPopulate() {
            axios.request ({
                url : process.env.VUE_APP_API_URL + 'restaurant',
                method : "GET",
                headers : {
                    'x-api-key' : process.env.VUE_APP_API_KEY,
                },
            }).then((response) => {
                cookies.set('menuId', response.data.menuId)
                cookies.set('restaurantId' , response.data.restaurantId)
                this.restaurantObject = response.data
                console.log(this.restaurantObject);
            }).catch((error)=>{
                console.log(error);
            })
        },

        menuPopulate() {
            axios.request ({
                url : process.env.VUE_APP_API_URL + 'menu',
                method : "GET",
                headers : {
                    'x-api-key' : process.env.VUE_APP_API_KEY,
                },
                params : {
                    restaurantId : ''
                }
            }).then((response) => {
                this.restaurantId = response.data.restaurantId
                this.menuObject = response.data
                console.log(this.menuObject);
            }).catch((error)=>{
                console.log(error);
            })
        }
        
        },


    }
</script>

<style lang="scss" scoped>
    
</style>