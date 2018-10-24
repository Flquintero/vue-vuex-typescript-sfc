//DEFINE TYPES TO BE INCLUDED IN THIS SPECIFIC STORE MODULE

export interface User {
    firstName: string;
    lastName: string;
    email: string;
    phone?: string;
}

export interface ProfileState {
    user?: User;
    error: boolean;
}