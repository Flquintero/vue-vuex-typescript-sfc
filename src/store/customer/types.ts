//DEFINE TYPES TO BE INCLUDED IN THIS SPECIFIC STORE MODULE

export interface Customer {
    firstName: string;
    lastName: string;
    email: string;
    phone?: string;
}

export interface CustomerState {
    customer?: Customer;
    error: boolean;
}