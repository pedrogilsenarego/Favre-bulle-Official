import { zodResolver } from "@hookform/resolvers/zod";
import { useMutation } from "@tanstack/react-query";
import { SubmitHandler, useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";

import { SubscribeSchema, SubscribeSchemaType } from "./validation";
import { defaultValues } from "./constants";

const useTeaser = () => {
  const navigate = useNavigate();

  const { reset, control, handleSubmit } = useForm<SubscribeSchemaType>({
    resolver: zodResolver(SubscribeSchema),
    defaultValues,
  });

  // const { mutate: signInMutation, isLoading: isLogin } = useMutation(
  //   Subscribe,
  //   {
  //     onError: (error: any) => {
  //       console.log("error", error);
  //     },
  //     onSuccess: (data: any) => {
  //       reset();
  //     },
  //   }
  // );

  const onSubmit: SubmitHandler<SubscribeSchemaType> = async (formData: {
    email: string;
  }) => {
    try {
      const response = await fetch(
        "https://us-central1-favre-bulle.cloudfunctions.net/api/payments/subscribe",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ email: formData.email }),
        }
      );
      console.log(response);
    } catch (error) {
      console.error("An error occurred:", error);
    }
  };
  return {
    handleSubmit,
    onSubmit,
    control,
    navigate,
  };
};

export default useTeaser;
