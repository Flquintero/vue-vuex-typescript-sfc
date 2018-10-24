//DEFINE ACTIONS FOR THE STORE MODULE HERE

//IMPORT  ACTIONTREE TYPE FROM VUEX
import { ActionTree } from 'vuex';

//IMPORT AXIOS OR ANY OTHER MODULE TO HANDLE HTTP(S) REQUESTS. LEFT IT COMMENTED OUT BUT INCLUDED AS IT WILL ACTUALLY BE HANDLED THAT WAY
// import axios from 'axios';

//IMPORT TYPES DEFINED FOR THIS STORE MODULE
import { CustomerState, Customer } from './types';

//IMPORT ROOTTYPES(FROM MAIN STORE) DEFINED FOR THIS STORE MODULE AS ACTIONTREE TAKES TWO ARGUMENTS
import { RootState } from '../types';

//DEFINE ACTUAL ACTIONS TO BE EXPOSED WITH SPECIFIC TYPE USING THE ACTIONTREE CLASS. ACTIONTREE TAKES TWO ARGUMENTS.
//EXAMPLE HERE IS HARDCODED FOR FUNCTIONALITY BUT COMMENTES AXIOS EXAMPLE IS LEFT FOR ACTUAL USE
export const actions: ActionTree<CustomerState, RootState> = {
    fetchCustomer({ commit }): any {

        //HARDCODED EXAMPLE
        const payload: Customer = {
            firstName: 'Customer First',
            lastName: 'Customer Last',
            email: 'customer@gmail.com',
            phone: '561-555-5555'
        };
        commit('customerLoaded', payload);

        //USE AXIOS COMMENTED OUT EXAMPLE FOR ACTUAL CALLS

        // axios({
        //     url: 'https://....'
        // }).then((response) => {
        //     const payload: Customer = response && response.data;
        //     commit('customerLoaded', payload);
        // }, (error) => {
        //     console.log(error);
        //     commit('customerError');
        // });
    }
};