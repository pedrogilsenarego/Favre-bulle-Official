import { ROUTE_PATHS } from "../../../routes/constants";
import { i18n } from "../../../translations/i18n";

type Option = {
  link: (typeof ROUTE_PATHS)[keyof typeof ROUTE_PATHS];
  name: string;
};

export const options: Option[] = [
  { name: i18n.t("header.dna", "DNA"), link: ROUTE_PATHS.DNA },
  {
    name: i18n.t("header.collections", "Collections"),
    link: ROUTE_PATHS.COLLECTIONS,
  },
];

export const langOptions = [
  {
    value: "en",
    label: "EN",
  },
  {
    value: "fr",
    label: "FR",
  },
  {
    value: "pt",
    label: "PT",
  },
];
