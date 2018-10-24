//DEFINE GETTERS FOR THE STORE MODULE HERE

//IMPORT  GETTERTREE TYPE FROM VUEX
import { GetterTree } from 'vuex';

//IMPORT TYPES DEFINED FROM THIS STORE MODULE
import { ProfileState } from './types';

//IMPORT ROOTTYPES(FROM MAIN STORE) DEFINED FOR THIS STORE MODULE AS ACTIONTREE TAKES TWO ARGUMENTS
import { RootState } from '../types';

//DEFINE ACTUAL GETTERS TO BE EXPOSED WITH SPECIFIC TYPE USING THE GETTERTREE CLASS. GETTER TREE TAKES TWO ARGUMENTS.
export const getters: GetterTree<ProfileState, RootState> = {
    fullName(state): string {
        const { user } = state;
        const firstName = (user && user.firstName) || '';
        const lastName = (user && user.lastName) || '';
        return `${firstName} ${lastName}`;
    }
};