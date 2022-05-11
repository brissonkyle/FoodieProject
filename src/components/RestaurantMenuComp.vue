<template>
    <div>
            <v-toolbar
            dark
        >
        <RestaurantNavComp/>
        <v-spacer></v-spacer>
        <v-toolbar-title>
            <h2>View Your Menu</h2>
        </v-toolbar-title>
        <v-spacer></v-spacer>
        </v-toolbar>
        <!-- <h1 v-for="item in menuObject" :key="item.menuId">
            {{ item.name }}
        </h1> -->
        <v-card
        class="mx-auto my-12"
        max-width="600"
        >

    <!-- <v-img v-for="imageUrl in menuObject" :key="imageUrl"
        height="250"
        src="imageUrl"
        >{{ this.imageUrl }}</v-img> -->

    <v-card-title>
        Not Quite Right
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

        <v-card-title v-for="item in menuObject" :key="item.menuId">
            
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
import cookies from 'vue-cookies'
import axios from "axios";
import RestaurantNavComp from '@/components/RestaurantNavComp.vue'


    export default {
        name : 'RestaurantMenuComp',
        components: {
            RestaurantNavComp,
        },

        data() {
            return {
                description : '',
                imageUrl : '',
                name : '',
                price : '',
                menuObject : []
            }
        },

        methods: {
            menuPopulate() {
            axios.request ({
                url : process.env.VUE_APP_API_URL + 'menu',
                method : "GET",
                headers : {
                    'x-api-key' : process.env.VUE_APP_API_KEY,
                },
                params : {
                    restaurantId : cookies.get('restaurantId')
                }
            }).then((response) => {
                this.menuObject = response.data
                console.log(this.menuObject);
            }).catch((error)=>{
                console.log(error);
            })
        }
        
        }
    }
</script>

<style lang="scss" scoped>

</style>