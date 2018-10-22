import { Module } from 'vuex';
import { getters } from '../profile/getters';
import { actions } from '../profile/actions';
import { mutations } from '../profile/mutations';
import { ProfileState } from '../profile/types';
import { RootState } from '../../types';
// import { RootState } from './types';

export const state: ProfileState = {
    user: {
        firstName: 'Frank',
        lastName: 'Jefferson',
        email: 'frank@gmail.com',
        phone: '561-348-4899'
    },
    error: false
};

const namespaced: boolean = true;

export const profile: Module<ProfileState,RootState> = {
    namespaced,
    state,
    getters,
    actions,
    mutations
};