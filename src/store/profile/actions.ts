//DEFINE ACTIONS FOR THE STORE MODULE HERE

//IMPORT  ACTIONTREE TYPE FROM VUEX
import { ActionTree } from 'vuex';

//IMPORT AXIOS OR ANY OTHER MODULE TO HANDLE HTTP(S) REQUESTS. LEFT IT COMMENTED OUT BUT INCLUDED AS IT WILL ACTUALLY BE HANDLED THAT WAY
// import axios from 'axios';

//IMPORT TYPES DEFINED FOR THIS STORE MODULE
import { ProfileState, User } from './types';

//IMPORT ROOTTYPES(FROM MAIN STORE) DEFINED FOR THIS STORE MODULE AS ACTIONTREE TAKES TWO ARGUMENTS
import { RootState } from '../types';

//DEFINE ACTUAL ACTIONS TO BE EXPOSED WITH SPECIFIC TYPE USING THE ACTIONTREE CLASS. ACTIONTREE TAKES TWO ARGUMENTS.
//EXAMPLE HERE IS HARDCODED FOR FUNCTIONALITY BUT COMMENTES AXIOS EXAMPLE IS LEFT FOR ACTUAL USE
export const actions: ActionTree<ProfileState, RootState> = {
    fetchData({ commit }): any {

        //HARDCODED EXAMPLE
        const payload: User = {
            firstName: 'Frank',
            lastName: 'Jefferson',
            email: 'frank@gmail.com',
            phone: '561-348-4899'
        };
        commit('profileLoaded', payload);

        //USE AXIOS COMMENTED OUT EXAMPLE FOR ACTUAL CALLS

        // axios({
        //     url: 'https://....'
        // }).then((response) => {
        //     const payload: User = response && response.data;
        //     commit('profileLoaded', payload);
        // }, (error) => {
        //     console.log(error);
        //     commit('profileError');
        // });
    }
};