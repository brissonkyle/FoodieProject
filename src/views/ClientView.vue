<template>
    <div>
        <v-toolbar 
                dark
                >
                <ClientNavComp/>
                <v-spacer></v-spacer>
                <v-toolbar-title><h2>Expedition Skip</h2></v-toolbar-title>
                <v-spacer></v-spacer>
            </v-toolbar>
        <RestaurantListComp/>
    </div>
</template>

<script>
import ClientNavComp from '@/components/ClientNavComp.vue'
import RestaurantListComp from '@/components/RestaurantListComp.vue'
    export default {
        name : 'ClientView.vue',
        components: {
                ClientNavComp,
                RestaurantListComp,
        },
    }
</script>

<style lang="scss" scoped>

</style>