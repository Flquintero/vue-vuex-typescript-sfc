<template>
    <div>
        <div>Hello</div>
        <div>
            <router-link :to="{ path: 'ChildView'}">Click Here</router-link>
        </div>
    </div>
</template>

<script lang="ts">
import Vue from "vue"


export default Vue.extend({
    name: "MainView"

});
</script>

<style>

</style>