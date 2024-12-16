export interface LoginFormInterface {
    email: string;
    password: string;
}

export interface ForgotPasswordInterface {
    email: string;
}

export interface RegisterFormInterface {
    name: string
    lastName: string
    email: string
    username: string
    phone: string
    address: string
    password: string
    confirmPassword: string
}