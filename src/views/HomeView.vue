<template>
    <div id="container">
        <v-container>
        <NavComp/>
        <h1>Welcome to </h1>
        <h2>A little about what we do</h2>
        <v-container></v-container>
        <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. 
            Vel porro nostrum facere aperiam quis voluptatum? 
            Dolor itaque eum inventore dolores ducimus hic soluta, 
            quas saepe rerum culpa commodi similique odit natus, praesentium officiis! 
            Cumque itaque architecto, a aliquam obcaecati quia ad 
            minus adipisci excepturi cupiditate et. 
            Deserunt saepe ipsam optio.
        </p>
        <h2 class="text-right">Some photos of our wonderful Supporters</h2>
        <v-container></v-container>
        <v-img></v-img><p class="text-right">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Qui, quidem.</p>
        <v-img></v-img><p class="text-right">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Qui, quidem.</p>
        <v-img></v-img><p class="text-right">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Qui, quidem.</p>
        <v-img></v-img><p class="text-right">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Qui, quidem.</p>
        </v-container>
    </div>
</template>

<script>
import NavComp from '@/components/NavComp.vue'
    export default {
        components: { NavComp },
        name : 'HomeView'
    }
</script>

<style lang="scss" scoped>
    #container {
        color: gold;
        background-color: #D62323;
        h1{
            text-align: Center;
        }
    }
</style>