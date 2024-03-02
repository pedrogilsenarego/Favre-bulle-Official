import { ROUTE_PATHS } from "../../../routes/constants";

type Option = {
  link: (typeof ROUTE_PATHS)[keyof typeof ROUTE_PATHS];
  name: string;
};

export const options: Option[] = [
  { name: "Terms of service", link: ROUTE_PATHS.POLICIES },
  { name: "Shipping Policy", link: ROUTE_PATHS.SHIPPING_POLICIES },
  { name: "Return Policy", link: ROUTE_PATHS.REFUND_POLICIE },
  { name: "Cookie Policy", link: ROUTE_PATHS.DNA },
];
