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
            Go to ?
            </v-btn>
            </template>
            <v-list>
                <v-list-item>
                    <router-link to="/">Home</router-link>
                </v-list-item>
                <v-list-item>
                    <router-link to="/ClientLoginView">Login</router-link>
                </v-list-item>
                <v-list-item>
                    <router-link to="/SignUpView">Sign Up</router-link>
                </v-list-item>
                <v-list-item>
                    <router-link to="/RestaurantSignupView">Restaurant Signup</router-link>
                </v-list-item>
                <v-list-item>
                    <router-link to="/RestaurantLoginView">Restaurant Login</router-link>
                </v-list-item>
            </v-list>
        </v-menu>
    </div>
</template>

<script>
    export default {
        name : 'NavComp'
    }
</script>

<style lang="scss" scoped>

</style>