<template>
    <div>
        <v-menu offset-y>
            <template v-slot:activator="{ on, attrs }">
            <v-btn
                width="200"
                elevation="7"
                color="primary"
                dark
                v-bind="attrs"
                v-on="on"
            >
            Select Restaurant
            </v-btn>
            </template>
            <v-list>
                <v-list-item></v-list-item>
            </v-list>
        </v-menu>
    </div>
</template>

<script>
    export default {
        name : 'RestaurantListComp'
    }
</script>

<style lang="scss" scoped>

</style>