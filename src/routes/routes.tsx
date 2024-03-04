import MainLayout from "../layouts/MainLayout";

import { subpagesRoutes } from "./SubpagesRoutes";
import { ROUTE_PATHS } from "./constants";
import { RoutesI } from "./routesImport";
import { AppRoute } from "./types";

export const routes: AppRoute[] = [
  ...subpagesRoutes,
  {
    path: ROUTE_PATHS.HOME,
    component: (
      <MainLayout>
        <RoutesI.Home />
      </MainLayout>
    ),
  },
  {
    path: ROUTE_PATHS.DNA,
    component: (
      <MainLayout>
        <RoutesI.DNA />
      </MainLayout>
    ),
  },
  {
    path: ROUTE_PATHS.COLLECTIONS,
    component: (
      <MainLayout>
        <RoutesI.Collections />
      </MainLayout>
    ),
  },
  {
    path: ROUTE_PATHS.PRODUCT,
    component: (
      <MainLayout>
        <RoutesI.Product />
      </MainLayout>
    ),
  },
  {
    path: ROUTE_PATHS.MY_ACCOUNT,
    component: (
      <MainLayout>
        <RoutesI.MyAccount />
      </MainLayout>
    ),
  },
  {
    path: ROUTE_PATHS.BUY_SUCCESS,
    component: (
      <MainLayout>
        <RoutesI.MyAccount />
      </MainLayout>
    ),
  },
  {
    path: ROUTE_PATHS.POLICIES,
    component: (
      <MainLayout>
        <RoutesI.Policies />
      </MainLayout>
    ),
  },
  {
    path: ROUTE_PATHS.SHIPPING_POLICIES,
    component: (
      <MainLayout>
        <RoutesI.ShippingPolicies />
      </MainLayout>
    ),
  },
  {
    path: ROUTE_PATHS.REFUND_POLICIE,
    component: (
      <MainLayout>
        <RoutesI.RefundPolicies />
      </MainLayout>
    ),
  },
  {
    path: ROUTE_PATHS.TERMS_OF_SERVICE,
    component: (
      <MainLayout>
        <RoutesI.TermsOfService />
      </MainLayout>
    ),
  },
];
