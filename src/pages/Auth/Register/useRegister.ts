import { zodResolver } from "@hookform/resolvers/zod";
import { useMutation } from "@tanstack/react-query";
import { SubmitHandler, useForm } from "react-hook-form";
import { userServices } from "../../../services/user.services";
import { CreateUser } from "../../../types/user";
import { defaultValues } from "./constants";
import { CreateUserSchema, CreateUserSchemaType } from "./validation";

const useRegister = () => {
  const { reset, control, handleSubmit } = useForm<CreateUserSchemaType>({
    resolver: zodResolver(CreateUserSchema),
    defaultValues,
  });

  const { mutate: createUser, isLoading: isRegistering } = useMutation(
    userServices.createUser,
    {
      onError: (error: any) => {
        console.log("error", error);
      },
      onSettled: () => {
        reset();
      },
    }
  );

  const onSubmit: SubmitHandler<CreateUserSchemaType> = async (
    formData: CreateUser
  ) => {
    createUser(formData as CreateUser);
  };
  return {
    handleSubmit,
    onSubmit,
    control,
    isRegistering,
  };
};

export default useRegister;
