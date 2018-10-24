//DEFINE MUTATIONS FOR THE MODULE HERE

//IMPORT MUTATION TREE TYPE FROM VUEX
import { MutationTree } from 'vuex';

//IMPORT TYPES DEFINED FROM THIS STORE MODULE
import { CustomerState, Customer } from './types';

//DEFINE ACTUAL MUTATIONS TO BE EXPOSED WITH SPECIFIC TYPE USING THE MUTATIONTREE CLASS
export const mutations: MutationTree<CustomerState> = {
    customerLoaded(state, payload: Customer) {
        state.error = false;
        state.customer = payload;
    },
    customerError(state) {
        state.error = true;
        state.customer = undefined;
    }
};