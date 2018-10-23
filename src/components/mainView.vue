<template>
    <div>
        <div class="title">Hello {{profile.user.firstName}}</div>
        <div>
            <router-link :to="{ path: 'ChildView'}">Click Here</router-link>
        </div>
    </div>
</template>

<script lang="ts">
    import Vue from 'vue';
    import { State, Action, Getter } from 'vuex-class';
    import Component from 'vue-class-component';
    import { ProfileState, User } from '../vuex/modules/profile/types';
    const namespace: string = 'profile';
@Component
    export default class MainView extends Vue {

        @State('profile') profile: ProfileState;
        // @Action('fetchData', { namespace }) fetchData: any;
        @Getter('fullName', { namespace }) fullName: string;

        // mounted() {
        //     // fetching data as soon as the component's been mounted
        //     this.fetchData();
        // }

        // computed variable based on user's email
        // get email() {
        //     const user = this.profile && this.profile.user;
        //     return (user && user.email) || '';
        // }
    }

</script>

<style>
    .title {
        color:rgb(32, 82, 65);
    }
</style>