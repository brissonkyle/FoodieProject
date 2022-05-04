<template>
    <div>
        <v-card class="overflow-hidden">
            <v-app-bar
                absolute
                color="indigo darken-2"
                dark
                shrink-on-scroll
                prominent
                scroll-target="#scrolling-techniques"
            >
        <ClientNavComp/>
        <v-spacer></v-spacer>
        <v-toolbar-title>Expedition Skip</v-toolbar-title>
        <v-spacer></v-spacer>
        <RestaurantListComp/>
        </v-app-bar>
        <v-sheet
            id="scrolling-techniques"
            class="overflow-y-auto"
            max-height="600"
        >
        <v-container style="height: 1000px;"></v-container>
        </v-sheet>
    </v-card>
    </div>
</template>

<script>
import ClientNavComp from './ClientNavComp.vue'
import RestaurantListComp from './RestaurantListComp.vue'
    export default {
        components: { ClientNavComp, RestaurantListComp },
        name : 'ClientViewComp'
    }
</script>

<style lang="scss" scoped>

</style>