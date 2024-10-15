import axiosInstance from '../../../api';
import { SignIn,SignUp } from '../types';

// ========== Auth Sign-In ==========
export async function signIn (data:SignIn){
    return await  axiosInstance.post("/auth/sign-in", data)
}
// ========== Auth Sign-In ==========
export async function signUp (data:SignUp){
    return await  axiosInstance.post("/auth/user/sign-up", data)
}