<template>
    <div>
        <v-toolbar
            dark
        >
        <RestaurantNavComp/>
        <v-spacer></v-spacer>
        <v-toolbar-title>
            <h2>Create Your Menu</h2>
        </v-toolbar-title>
        <v-spacer></v-spacer>
    </v-toolbar>
    <v-container>
        <v-text-field
            v-model="name"
            label="Menu Item Name"
            outlined
        ></v-text-field>
        <v-textarea
            v-model="description"
            label="Menu Item Description"
            outlined
        ></v-textarea>
        <v-text-field
            v-model="price"
            label="Menu Item Price"
            outlined
        ></v-text-field>
        <v-text-field
            v-model="imageUrl"
            label="Menu Item Image (must be a URL)"
            outlined
        ></v-text-field>
        <v-btn @click="handleMenuItemCreate"
        color="primary"
        >Create Item
        </v-btn>
        <v-btn @click="handleGetMenuItem"
        color="primary"
        >Menu Search
        </v-btn>
        <v-btn @click="handleUpdateMenuItem"
        color="primary"
        >Update Item
        </v-btn>
        </v-container>
    </div>
</template>

<script>

import RestaurantNavComp from '@/components/RestaurantNavComp.vue'
import { useCallingApiStore } from '@/stores/callingapi'
import {mapActions} from 'pinia'



    export default {
        name : 'RestaurantViewComp',
        components: {
            RestaurantNavComp,
        },

    methods: {
    ...mapActions(useCallingApiStore, ['createMenuItem']),
            handleMenuItemCreate() {
                this.createMenuItem(this.name, this.description, this.price, this.imageUrl,);
            
        
        },
        ...mapActions(useCallingApiStore, ['getMenuItem']),
            handleGetMenuItem() {
                this.getMenuItem();
        
        },
        ...mapActions(useCallingApiStore, ['updateMenuItem']),
            handleUpdateMenuItem() {
                this.updateMenuItem();
        
        },
        // ...mapActions(useCallingApiStore, ['menuPopulate']),
        //     handleMenuPopulate() {
        //     this.menuPopulate(this.name, this.description, this.price, this.imageUrl,);
        // },
    },
    data :() => ({
        name : '',
        description : "",
        price : '',
        imageUrl : undefined,
        restaurantId : '',
        
    }),

    mounted () {
        useCallingApiStore().$onAction(({name, after})=>{
            if (name == "userRegisterAlert"){
                console.log("handling");
                after((response)=>{
                this.handleError(response);
                })
            }
        })
    }
}
</script>

<style lang="scss" scoped>

</style>