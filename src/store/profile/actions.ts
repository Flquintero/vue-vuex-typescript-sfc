import { ActionTree } from 'vuex';
// import axios from 'axios';
import { ProfileState, User } from './types';
import { RootState } from '../types';


export const actions: ActionTree<ProfileState, RootState> = {
    fetchData({ commit }): any {
        const payload: User = {
            firstName: 'Frank',
            lastName: 'Jefferson',
            email: 'frank@gmail.com',
            phone: '561-348-4899'
        };
        commit('profileLoaded', payload);
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