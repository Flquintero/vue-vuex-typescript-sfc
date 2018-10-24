//MAIN FILE FOR A SPECIFIC STORE MODULE. 

//IMPORT MODULE CLASS FROM VUEX TO BE ABLE TO DEFINE IT WITH SPECIFIC TYPES INCLUDED IN THE TYPES FILE FOR THIS MODULE
import { Module } from 'vuex';

//BELOW IMPORT ALL OTHER FILES THAT WILL PERFORM DIFFERENT FUNCTIONALITIES OF TH STORE
import { getters } from './getters';
import { actions } from './actions';
import { mutations } from './mutations';

//BELOW IMPORT THE TYPES THAT WILL BE DEFINED IN THIS STORE
import { ProfileState } from './types';
import { RootState } from '../types';

//DEFINE THE STATES(DIFFERENT PROPS THAT WILL HANDLE DATA) THAT WILL BE DEFINED IN THIS STORE ALSO DEFINE ITS TYPE FROM THE OPTIONS IMPORTED
export const state: ProfileState = {
    user: undefined,
    error: false
};

//INCLUDE NAMESPACED TRUE TO BE ABLE TO DIFFERENTIATE FROM OTHER STORES. IF IT IS SET TO TRUE THAT FOR EXAMPLE ACTIONS WILL BE DEFINED AS {{MODULE}}/{{ACTIONNAME}} SO FOR EXAMPLE profile/fetchData
const namespaced: boolean = true;

//SETUP WHAT WILL BE EXPORTED TO MAIN STORE TO BE ACCESSED. NOTICE IT IS USING TYPES FROM PROFILESTATE AND ROOTSTATE WHICH ARE IMPORTED
export const profile: Module<ProfileState,RootState> = {
    namespaced,
    state,
    getters,
    actions,
    mutations
};