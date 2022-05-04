import { defineStore } from "pinia";
import axios from "axios";
import cookies  from 'vue-cookies';
import router from "@/router";

export const useCallingApiStore = defineStore('api',{
    state : () => {
        return  {
            
        }
    },

    actions : {
        async clientCreatedApi( email, username, firstName, lastName, password, pictureUrl ) {
            axios.request({
                headers : {
                    'x-api-key' : process.env.VUE_APP_API_KEY,
                },
                url : process.env.VUE_APP_API_URL + 'client',
                method : "POST",
                data : {
                    email,
                    username,
                    firstName,
                    lastName,
                    password,
                    pictureUrl : pictureUrl,
                }
            }).then((response)=>{
                cookies.set('clientSessionToken', response.data.token)
                console.log(cookies.get('clientSessionToken'));
                router.push('ClientView')
            }).catch((error)=> {
                console.log(error);
                this.userCreatedAlert(error.response)
            })
        },
        userCreatedAlert(error){
            return (error)
        },

        async clientLoginApi(email, password) {
            axios.request({
                url : process.env.VUE_APP_API_URL + 'client-login',
                method : 'POST',
                headers : {
                    'x-api-key' : process.env.VUE_APP_API_KEY,
                },
                data : {
                    email ,
                    password ,
                },
            }).then((response)=>{
                console.log(response);
                cookies.set('clientSessionToken', response.data.token);
                cookies.get('clientSessionToken');
                router.push('ClientView')
            }).catch((error)=> {
                console.log(error);
            })
        },

        async clientDeleteApi() {
            axios.request({
                url : 'https://foodierest.ml/api/client',
                method : "DELETE",
                headers : {
                    token : cookies.get('clientSessionToken'),
                    'x-api-key' : process.env.VUE_APP_API_KEY,
                },
            }).then((response)=>{
                console.log(response);
            }).catch((error)=> {
                console.log(error);
            })
        },

        async clientTokenDestroy() {
            axios.request({
                url : process.env.VUE_APP_API_URL + 'restaurant-login',
                method : 'DELETE',
                headers : {
                    token : cookies.get('clientSessionToken'),
                    'x-api-key' : process.env.VUE_APP_API_KEY,
                },
                
            }).then((response)=>{
                console.log(response);
                console.log('It worked');
                cookies.remove('clientSessionToken');
                router.push('/')
                
            }).catch((error)=> {
                console.log('It didnt work');
                console.log(error);
            })
        },
        
        async restaurantCreateApi (name, address, bio, city, email, password, phoneNum,) {
            axios.request({
                url : process.env.VUE_APP_API_URL + 'restaurant',
                method : 'POST',
                headers : {
                    // token : '',
                    'x-api-key' : process.env.VUE_APP_API_KEY,
                },
                data : {
                    name,
                    address,
                    bio,
                    city,
                    email,
                    password,
                    phoneNum,
                    // bannerUrl : null,
                    // profileUrl : null,
                },
            }).then((response)=>{
                router.push('RestaurantView');
                cookies.set('sessionToken', response.data.token)
                console.log(cookies.get('sessionToken'));
                console.log(response);
            }).catch((error)=> {
                console.log(error);
            })
        },
        

        async restaurantLoginApi(email, password) {
            axios.request({
                url : process.env.VUE_APP_API_URL + 'restaurant-login',
                method : 'POST',
                headers : {
                    'x-api-key' : process.env.VUE_APP_API_KEY,
                },
                data : {
                    email,
                    password,
                },
            }).then((response)=>{
                console.log(response);
                cookies.set('sessionToken' , response.data.token);
                router.push('RestaurantView')
            }).catch((error)=> {
                console.log(error);
            })
        },
        
        async restaurantUpdateApi (name, address, bio, city, password, phoneNum,) {
            axios.request({
                url : process.env.VUE_APP_API_URL + 'restaurant',
                method : 'PATCH',
                headers : {
                    token : cookies.get('sessionToken'),
                    'x-api-key' : process.env.VUE_APP_API_KEY,
                },
                data : {
                    name,
                    address,
                    bio,
                    city,
                    password,
                    phoneNum,
                    // bannerUrl : null,
                    // profileUrl : null,
                },
            }).then((response)=>{
                console.log(response);
            }).catch((error)=> {
                console.log(error);
            })
        },

        async restaurantTokenDestroy() {
            axios.request({
                url : process.env.VUE_APP_API_URL + 'restaurant-login',
                method : 'DELETE',
                headers : {
                    token : cookies.get('sessionToken'),
                    'x-api-key' : process.env.VUE_APP_API_KEY,
                },
                
            }).then((response)=>{
                console.log(response);
                console.log('It worked');
                cookies.remove('sessionToken');
                router.push('/')
                
            }).catch((error)=> {
                console.log('It didnt work');
                console.log(error);
            })
        },

        async createMenuItem(name, description, price, imageUrl) {
            axios.request ({
                url : process.env.VUE_APP_API_URL + 'menu',
                method : 'POST',

                headers : {
                    token : cookies.get('sessionToken'),
                    'x-api-key' : process.env.VUE_APP_API_KEY,
                },

                data : {
                    name,
                    description,
                    price,
                    imageUrl
                },

            }).then((response)=>{
                console.log(response);
                cookies.get('sessionToken');
            }).catch((error)=> {
                console.log(error);
            })
        },


        async getMenuItem(restaurantId) {
            axios.request ({
                url : process.env.VUE_APP_API_URL + 'menu',
                method : 'GET',

                headers : {
                    'x-api-key' : process.env.VUE_APP_API_KEY,
                },

                data : {
                    restaurantId,
                },

            }).then((response)=>{
                console.log(response);
            }).catch((error)=> {
                console.log(error);
            })
        },
        
    
},


    getters: {
        
    }
})