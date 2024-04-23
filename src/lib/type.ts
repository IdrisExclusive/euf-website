export type emailState = {errors?: {email?: string[]}; message?: string; submitted?: boolean}

export type existingUserState = {
    errors?: {
        email?: string[];
        password?: string[];
    },
    message?: string;
    error?: boolean
}

export type newUserState = {
    errors?: {
        name?: string[];
        email?: string[];
        password?: string[];
        confirmPassword?: string[];
    },
    message?: string;
    error?: boolean
}