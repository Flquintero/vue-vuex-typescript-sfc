<template>
    <div>
        <div v-if="profile && profile.user" class="title">Hello {{profile.user.firstName}}</div>
        <div>
            <router-link :to="{ path: 'ChildView'}">Click Here</router-link>
        </div>
    </div>
</template>

<script lang="ts">
    import { State, Action, Getter, Mutation } from 'vuex-class';
    import {Component, Prop, Vue} from 'vue-property-decorator';
    import { ProfileState, User } from '../store/profile/types';
    const namespace: string = 'profile';
@Component
    export default class MainView extends Vue {

        @State('profile') profile: ProfileState;
        @Action('fetchData', { namespace }) fetchData: any;
        @Getter('fullName', { namespace }) fullName: string;
        

        mounted() {
            // fetching data as soon as the component's been mounted
            this.fetchData();
        }

        // computed variable based on user's email
        // get fullname() {
        //     const firstName = (this.profile.user && this.profile.user.firstName) || '';
        //     const lastName = (this.profile.user && this.profile.user.lastName) || '';
        //     return `${firstName} ${lastName}`;
        // }
    }

</script>

<style>
    .title {
        color:rgb(32, 82, 65);
    }
</style>