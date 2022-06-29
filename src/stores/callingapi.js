import { defineStore } from "pinia";
import axios from "axios";
import cookies  from 'vue-cookies';
import router from "@/router";

export const useCallingApiStore = defineStore('api',{
    state : () => {
        return  {
            
        }
    },

    methods: {

    },

    actions : {
        async clientCreatedApi( email, username, firstName, lastName, password, pictureUrl ) {
            axios.request({
                url : process.env.VUE_APP_API_URL + '/api/client',
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
                url : process.env.VUE_APP_API_URL + '/api/client-login',
                method : 'POST',
                headers : {
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

        async clientOrderApi(restaurantId, menuItems) {
            axios.request({
                url : process.env.VUE_APP_API_URL + '/api/order',
                method : "DELETE",
                headers : {
                    token : cookies.get('clientSessionToken'),
                },
                data : {
                    restaurantId,
                    menuItems,
                }

            }).then((response)=>{
                console.log(response);
            }).catch((error)=> {
                console.log(error);
            })
        },

        async clientUpdateApi( email, username, firstName, lastName, password, pictureUrl ) {
            axios.request({
                headers : {
                    token : cookies.get('clientSessionToken'),
                },
                url : process.env.VUE_APP_API_URL + '/api/client',
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
                console.log(response)
            }).catch((error)=> {
                console.log(error);
                this.userCreatedAlert(error.response)
            })
        },
        userUpdateAlert(error){
            return (error)
        },


        async clientDeleteApi() {
            axios.request({
                url : process.env.VUE_APP_API_URL + '/api/client',
                method : "DELETE",
                headers : {
                    token : cookies.get('clientSessionToken'),
                },
            }).then((response)=>{
                console.log(response);
            }).catch((error)=> {
                console.log(error);
            })
        },

        async clientTokenDestroy() {
            axios.request({
                url : process.env.VUE_APP_API_URL + '/api/restaurant-login',
                method : 'DELETE',
                headers : {
                    token : cookies.get('clientSessionToken'),
                },
                
            }).then((response)=>{
                console.log(response);
                console.log('It worked');
                cookies.remove('clientSessionToken');
                cookies.remove('restaurantId'),
                cookies.remove('menuId')
                router.push('/')
                
            }).catch((error)=> {
                console.log('It didnt work');
                console.log(error);
            })
        },
        
        async restaurantCreateApi (name, address, bio, city, email, password, phoneNum,) {
            axios.request({
                url : process.env.VUE_APP_API_URL + '/api/restaurant',
                method : 'POST',
                headers : {
                    // token : '',
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
                console.log(response);
            }).catch((error)=> {
                console.log(error);
            })
        },
        

        async restaurantLoginApi(email, password) {
            axios.request({
                url : process.env.VUE_APP_API_URL + '/api/restaurant-login',
                method : 'POST',
                headers : {
                },
                data : {
                    email,
                    password,
                },
            }).then((response)=>{
                console.log(response);
                cookies.set('sessionToken', response.data.token)
                cookies.set('restaurantId' , response.data.restaurantId);
                router.push('RestaurantView')
            }).catch((error)=> {
                console.log(error);
            })
        },
        
        async restaurantUpdateApi (name, address, bio, city, password, phoneNum, menuId) {
            axios.request({
                url : process.env.VUE_APP_API_URL + '/api/restaurant',
                method : 'PATCH',
                headers : {
                    token : cookies.get('sessionToken'),
                },
                data : {
                    name,
                    address,
                    bio,
                    city,
                    password,
                    phoneNum,
                    menuId : menuId
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
                url : process.env.VUE_APP_API_URL + '/api/restaurant-login',
                method : 'DELETE',
                headers : {
                    token : cookies.get('sessionToken'),
                },
                
            }).then((response)=>{
                console.log(response);
                console.log('It worked');
                cookies.remove('sessionToken');
                cookies.remove('restaurantId');
                router.push('/')
                
            }).catch((error)=> {
                console.log('It didnt work');
                console.log(error);
            })
        },

        async createMenuItem(name, description, price, imageUrl) {
            axios.request ({
                url : process.env.VUE_APP_API_URL + '/api/menu',
                method : 'POST',

                headers : {
                    token : cookies.get('sessionToken'),
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


        async getMenuItem() {
            axios.request ({
                url : process.env.VUE_APP_API_URL + '/api/menu',
                method : 'GET',

                headers : {
                },

                params : {
                    restaurantId : cookies.get('restaurantId')
                },

            }).then((response)=>{
                console.log(response);
            }).catch((error)=> {
                console.log(error);
            })
        },


        async updateMenuItem(name, description, price, imageUrl) {
            axios.request ({
                url : process.env.VUE_APP_API_URL + '/api/menu',
                method : 'PATCH',

                headers : {
                    token : cookies.get('sessionToken'),
                    
                },

                params : {
                    name,
                    description,
                    price,
                    imageUrl,
                    
                },

            }).then((response)=>{
                console.log(response);
                cookies.get('sessionToken');
            }).catch((error)=> {
                console.log(error);
            })
        },
        
    
},


    getters: {
        
    }
})