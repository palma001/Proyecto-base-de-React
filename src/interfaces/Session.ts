/* eslint-disable @typescript-eslint/no-explicit-any */
export interface SessionData {
    token: string;
    user: User;
}


export interface User {
    id: number;
    name: string;
    email: string;
    phone_number: string;
    username: string;
    profile_picture: string;
    role_id: number;
    created_at: string;
    updated_at: string;
}