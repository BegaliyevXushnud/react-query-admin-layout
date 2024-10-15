import { useMutation } from "@tanstack/react-query";
import { SignIn, SignUp } from "../types";
import { signIn, signUp } from "../service";
import { saveAccessToken } from "../../../utils/token-service";
import { Notification } from "../../../utils/notification";
import { useNavigate } from 'react-router-dom';

export function useSignInMutation() {
  return useMutation({
    mutationFn: async (data: SignIn) => {
      const response = await signIn(data);
      if (response.status !== 201) throw new Error(response.data?.message || 'Login failed');
      return response;
    },
    onSuccess: (response) => {
      const { access_token } = response.data.data.tokens;
      saveAccessToken(access_token);
      Notification('success', 'Login Successful');
      window.location.href = './admin-layout';
    },
    onError: (error) => {
      Notification('error', error.message);
    },
  });
}

export function useSignUpMutation() {
  const navigate = useNavigate();
  
  return useMutation({
    mutationFn: async (data: SignUp) => {
      const response = await signUp(data);
      // Xato xabarini `data.message`dan olish
      if (response.status !== 201) {
        const errorMessage = response.data?.message || 'Registration failed';
        throw new Error(errorMessage);
      }
      return response;
    },
    onSuccess: () => {
      Notification('success', 'Registration Successful');
      navigate('/'); // Ro'yxatdan o'tgandan so'ng bosh sahifaga yo'naltirish
    },
    onError: (error) => {
      Notification('error', error.message);
    },
  });
}
