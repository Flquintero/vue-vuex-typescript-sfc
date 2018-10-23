import { Module } from 'vuex';
import { getters } from './getters';
import { actions } from './actions';
import { mutations } from './mutations';
import { ProfileState } from './types';
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