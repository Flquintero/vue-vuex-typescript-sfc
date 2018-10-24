//DEFINE MUTATIONS FOR THE MODULE HERE

//IMPORT MUTATION TREE TYPE FROM VUEX
import { MutationTree } from 'vuex';

//IMPORT TYPES DEFINED FROM THIS STORE MODULE
import { ProfileState, User } from './types';

//DEFINE ACTUAL MUTATIONS TO BE EXPOSED WITH SPECIFIC TYPE USING THE MUTATIONTREE CLASS
export const mutations: MutationTree<ProfileState> = {
    profileLoaded(state, payload: User) {
        state.error = false;
        state.user = payload;
    },
    profileError(state) {
        state.error = true;
        state.user = undefined;
    }
};