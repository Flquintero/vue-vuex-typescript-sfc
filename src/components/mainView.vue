<template>
    <div>
        <div v-if="profile && profile.user" class="title">Hello {{profile.user.firstName}}</div>
        <div>
            <router-link :to="{ path: 'ChildView'}">Click Here</router-link>
        </div>
    </div>
</template>

<script lang="ts">
    //IMPORTS THE DECORATORS TO WORK WITH mapState, mapAction, etc FUNCTIONALITY
    import { State, Action, Getter, Mutation } from 'vuex-class';
    //IMPORTS THE DECORATORS TO STRUCTURE THE VUE-COMPONENT AS CLASS STYLE
    import {Component, Prop, Vue} from 'vue-property-decorator';
    //BELOW INCLUDE TYPES FROM EACH STORE TO BE ABLE TO HAVE DATA FROM STORES TYPESAFE
    import { ProfileState, User } from '../store/profile/types';
    import { CustomerState, Customer } from '../store/customer/types';

//START COMPONENT AND INCLUDE PROPS AND COMPONENTS AS AN ARGUMENT {components:{},props:{}}
@Component
    export default class MainView extends Vue {
        //INCLUDE SPECIFIC MODULE STATES
        @State('profile') profile: ProfileState;
        @State('customer') customer: CustomerState;
        //INCLUDE SPECIFIC MODULE ACTIONS. TAKES ARGUMENT {{MODULE}}/{{ACTION}} AS DEFINED IN MODULES OBJECT WHEN MAIN STORE IS DEFINED IN STORE.TS
        @Action('profile/fetchData') fetchData: any;
        @Action('customer/fetchCustomer') fetchCustomer: any;
        //INCLUDE SPECIFIC MODULE GETTERS. TAKES ARGUMENT {{MODULE}}/{{ACTION}} AS DEFINED IN MODULES OBJECT WHEN MAIN STORE IS DEFINED IN STORE.TS
        @Getter('profile/fullName') fullName: string;
        
        mounted() {
            // fetching data as soon as the component's been mounted
            this.fetchData();
            this.fetchCustomer();
        }

        // computed variable based on first and lastname
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