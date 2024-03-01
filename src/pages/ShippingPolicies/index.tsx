import { Box, Typography } from "@mui/material";
import { i18n } from "../../translations/i18n";

const ShippingPolicies = () => {
  return (
    <Box
      style={{ display: "flex", justifyContent: "center", margin: "0px 20px" }}
    >
      <Box
        style={{
          marginTop: "100px",
          maxWidth: "60%",
          display: "flex",
          flexDirection: "column",
          rowGap: "40px",
        }}
      >
        <div>
          <Typography
            style={{
              fontSize: "35px",
              fontWeight: 800,
              textAlign: "center",
              lineHeight: "49px",
            }}
          >
            {i18n.t("pages.shippingPolicies.shipping.title")}
          </Typography>
          <Typography
            style={{
              textAlign: "justify",
              marginTop: "20px",
            }}
            dangerouslySetInnerHTML={{
              __html: i18n.t("pages.shippingPolicies.shipping.text"),
            }}
          />
        </div>
        <div>
          <Typography
            style={{
              fontSize: "35px",
              fontWeight: 800,
              textAlign: "center",
              lineHeight: "49px",
            }}
          >
            {i18n.t("pages.shippingPolicies.internationalShipping.title")}
          </Typography>
          <Typography
            style={{
              textAlign: "justify",
              marginTop: "20px",
            }}
            dangerouslySetInnerHTML={{
              __html: i18n.t(
                "pages.shippingPolicies.internationalShipping.text"
              ),
            }}
          />
        </div>
        <div>
          <Typography
            style={{
              fontSize: "35px",
              fontWeight: 800,
              textAlign: "center",
              lineHeight: "49px",
            }}
          >
            {i18n.t("pages.shippingPolicies.placeDelivery.title")}
          </Typography>
          <Typography
            style={{
              textAlign: "justify",
              marginTop: "20px",
            }}
            dangerouslySetInnerHTML={{
              __html: i18n.t("pages.shippingPolicies.placeDelivery.text"),
            }}
          />
        </div>
        <div>
          <Typography
            style={{
              fontSize: "35px",
              fontWeight: 800,
              textAlign: "center",
              lineHeight: "49px",
            }}
          >
            {i18n.t("pages.shippingPolicies.whenFails.title")}
          </Typography>
          <Typography
            style={{
              textAlign: "justify",
              marginTop: "20px",
            }}
            dangerouslySetInnerHTML={{
              __html: i18n.t("pages.shippingPolicies.whenFails.text"),
            }}
          />
          <Typography
            style={{
              textAlign: "justify",
              marginLeft: "30px",
            }}
            dangerouslySetInnerHTML={{
              __html: i18n.t("pages.shippingPolicies.whenFails.text2"),
            }}
          />
          <Typography
            style={{
              textAlign: "justify",
            }}
            dangerouslySetInnerHTML={{
              __html: i18n.t("pages.shippingPolicies.whenFails.text3"),
            }}
          />
        </div>
      </Box>
    </Box>
  );
};

export default ShippingPolicies;
