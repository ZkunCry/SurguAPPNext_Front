import type { IUser } from "@/types/user";
import { AuthService } from "@/services/auth/authService";
import { useMutation, UseMutationResult } from "@tanstack/react-query";
import type { SignInType } from "@/schemas/authschema";
import toast from "react-hot-toast";

// Тип для результата мутации
type IUseSignIn = UseMutationResult<IUser, Error, SignInType, unknown>;

export function useSignIn(): IUseSignIn {
  return useMutation<IUser, Error, SignInType>({
    mutationFn: AuthService.signIn,
    onError: (error: Error) => {
      toast.error(error.message);
      console.error("Error during sign in", error);
    },
    onSuccess: (data) => {
      console.log("Signed in successfully", data);
    },
  });
}
