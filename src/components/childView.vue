<template>
    <div>
        <div>Child</div>
        <router-link :to="{ path: '/'}">Click Here</router-link>
     </div>
</template>

<script lang="ts">
  import { State, Action, Getter } from 'vuex-class';
    import {Component, Prop, Vue} from 'vue-property-decorator';
    import { ProfileState, User } from '../store/profile/types';
    const namespace: string = 'profile';
@Component
    export default class ChildView extends Vue {
        @State('profile') profile: ProfileState;
    }
</script>

<style>

</style>