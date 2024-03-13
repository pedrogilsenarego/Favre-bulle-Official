import { zodResolver } from "@hookform/resolvers/zod";
import { useMutation } from "@tanstack/react-query";
import { SubmitHandler, useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";

import { CreateProductSchema, CreateProductSchemaType } from "./validation";
import { defaultValues } from "./constants";
import { userServices } from "../../services/user.services";
import { Login } from "../../types/user";

const useTeaser = () => {
  const navigate = useNavigate();

  const { reset, control, handleSubmit } = useForm<CreateProductSchemaType>({
    resolver: zodResolver(CreateProductSchema),
    defaultValues,
  });

  const { mutate: signInMutation, isLoading: isLogin } = useMutation(
    userServices.loginUser,
    {
      onError: (error: any) => {
        console.log("error", error);
      },
      onSuccess: (data: any) => {
        reset();
      },
    }
  );

  const onSubmit: SubmitHandler<CreateProductSchemaType> = async (
    formData: Login
  ) => {
    signInMutation(formData);
  };
  return {
    handleSubmit,
    onSubmit,
    control,
    navigate,
    isLogin,
  };
};

export default useTeaser;
