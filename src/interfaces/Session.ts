/* eslint-disable @typescript-eslint/no-explicit-any */
export interface SessionData {
    access_token: string;
    data: User;
}


export interface User {
    id: number;
    address: string;
    document_number: string;
    document_type_id: number;
    email: string;
    is_root: boolean;
    last_name: string;
    name: string;
    phone_number: string;
    picture_url: string;
    roles: any[];
    username: string;
}