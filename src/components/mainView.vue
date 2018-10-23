<template>
    <div>
        <div>Hello {{firstName}}</div>
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
    export default class UserDetail extends Vue {
        @State('profile') profile: ProfileState;

    }
</script>

<style>

</style>