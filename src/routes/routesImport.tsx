import { lazyWithRetryAndLoader } from "../utils/lazyWithRetry";

export const RoutesI = {
  Home: lazyWithRetryAndLoader(() => import("../pages/Home")),
  AdminManageProducts: lazyWithRetryAndLoader(
    () => import("../pages/Admin/ManageProducts")
  ),
  AdminCreateProduct: lazyWithRetryAndLoader(
    () => import("../pages/Admin/ManageProducts/CreateProduct")
  ),
  Login: lazyWithRetryAndLoader(() => import("../pages/Auth/Login")),
  Register: lazyWithRetryAndLoader(() => import("../pages/Auth/Register")),
  DNA: lazyWithRetryAndLoader(() => import("../pages/DNA")),
  Collections: lazyWithRetryAndLoader(() => import("../pages/Collections")),
  Product: lazyWithRetryAndLoader(() => import("../pages/Product")),
  MyAccount: lazyWithRetryAndLoader(() => import("../pages/MyAccount")),
  BuySuccess: lazyWithRetryAndLoader(() => import("../pages/BuySuccess")),
  RecoverPassword: lazyWithRetryAndLoader(
    () => import("../pages/Auth/RecoverPassword")
  ),
};
