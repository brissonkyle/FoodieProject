<template>
    <div>
        <v-container>
            <v-toolbar 
                dark
                >
                <ClientNavComp/>
                <v-spacer></v-spacer>
                <v-toolbar-title><h2>Settings</h2></v-toolbar-title>
                <v-spacer></v-spacer>
            </v-toolbar>
            <v-container>
        <v-text-field
            outlined
            append-outer-icon="mdi-account-tie"
            label="Edit Picture URL"
        ></v-text-field>
        <v-text-field
            v-model="name"
            outlined
            append-outer-icon="mdi-account"
            label="Edit Username"
        ></v-text-field>
        <v-text-field
            v-model="email"
            outlined
            append-outer-icon="mdi-email"
            label="EMAIL MUST REMAIN THE SAME"
            required
        ></v-text-field>
        <v-text-field
        v-model="name"
            outlined
            append-outer-icon="mdi-lock"
            name="input-10-1"
            label="Edit Password"
            hint="At least 8 characters"
        ></v-text-field>
        <v-btn
            width="200"
            color="primary"
            elevation="9"
            @click="handleClientUpdate"
        >
            Save Changes
        </v-btn>
        <v-btn 
            width="200"
            color="red"
            elevation="9"
            @click="handleClientDelete"
        >
        DELETE USER!
        </v-btn>
        </v-container>
    </v-container>
    </div>
</template>

<script>
import ClientNavComp from '@/components/ClientNavComp.vue'
import { useCallingApiStore } from '@/stores/callingapi'
import {mapActions} from 'pinia'


    export default {
        name : 'ClientProfileView',
        components: {
            ClientNavComp,
        },


        data :() => ({
            name : '',
            email : '',
            password : '',
            pictureUrl : undefined,
        }),

        methods: {
        ...mapActions(useCallingApiStore, ['clientDeleteApi']),
        handleClientDelete() {
                    this.clientDeleteApi()
        
        },
        ...mapActions(useCallingApiStore, ['clientUpdateApi']),
        handleClientUpdate() {
                this.clientUpdateApi(this.name, this.email, this.password, this.pictureUrl)
    }
    }
    }
</script>

<style lang="scss" scoped>

</style>