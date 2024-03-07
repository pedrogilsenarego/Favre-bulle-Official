import { useQuery } from "@tanstack/react-query";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { addProductToCart } from "../../redux/cart/cart.actions";
import { queryIdentifiers } from "../../services/constants";
import { productsServices } from "../../services/products.services";
import { Product } from "../../types/product";
import { useMediaQuery, useTheme } from "@mui/material";

const useProduct = () => {
  const dispatch = useDispatch();
  const [mainImage, setMainImage] = useState<number>(0);
  const { product } = useParams<Record<string, string | undefined>>();
  const Theme = useTheme();
  const mobile = useMediaQuery(Theme.breakpoints.down("sm"));
  const documentID = product || "";
  const { isLoading: isLoadingProduct, data: productData } = useQuery<
    Product,
    Error
  >(
    [queryIdentifiers.PRODUCT, documentID],
    () => productsServices.getProduct(documentID),
    {
      enabled: !!documentID,
    }
  );

  const handleProductToCart = () => {
    if (productData) dispatch(addProductToCart([productData]));
  };

  return {
    isLoadingProduct,
    productData,
    handleProductToCart,
    mainImage,
    setMainImage,
    mobile,
  };
};

export default useProduct;
