<template>
    <div>
        <div>Hello {{}}</div>
        <div>
            <router-link :to="{ path: 'ChildView'}">Click Here</router-link>
        </div>
    </div>
</template>

<script lang="ts">
import Vue from "vue"
import { mapState } from 'vuex'


export default Vue.extend({
    name: "MainView",
    computed: mapState({
        products: state => state.products.all
    }),

});
</script>

<style>

</style>