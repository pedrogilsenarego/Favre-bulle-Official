import { yupResolver } from "@hookform/resolvers/yup";
import { useMutation, useQuery } from "@tanstack/react-query";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate, useParams } from "react-router-dom";
import { ROUTE_PATHS } from "../../../../routes/constants";
import { queryIdentifiers } from "../../../../services/constants";
import { productsServices } from "../../../../services/products.services";
import { FORM_VALIDATION } from "./validation";

type Props = {
  edit?: boolean;
};

const useCreateProduct = ({ edit = false }: Props) => {
  const navigate = useNavigate();
  const { id } = useParams<Record<string, string | undefined>>();
  const [edited, setEdited] = useState<boolean>(false);

  const documentID = id || "";

  const { reset, control, handleSubmit, setValue, setError } = useForm({
    resolver: yupResolver(FORM_VALIDATION),
  });

  const {
    isLoading: isLoadingProduct,
    error: errorFetchingProduct,
    data: productData,
  } = useQuery<[string, string]>(
    [queryIdentifiers.PRODUCT, documentID],
    () => productsServices.getProduct(documentID),
    {
      enabled: edit && !!documentID,
    }
  );

  console.log(productData);

  const { mutate: createProduct, isLoading: isCreatingProduct } = useMutation(
    productsServices.createProduct,
    {
      onError: (error: any) => {
        console.log("error", error);
      },
      onSettled: () => {
        reset();
        navigate(ROUTE_PATHS.ADMIN);
      },
    }
  );

  const onSubmit = async (formData: any) => {
    createProduct(formData);
  };
  return {
    handleSubmit,
    onSubmit,
    control,
    setValue,
    isCreatingProduct,
    isLoadingProduct,
    setError,
  };
};

export default useCreateProduct;
