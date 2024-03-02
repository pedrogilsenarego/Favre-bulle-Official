import { Box, Typography } from "@mui/material";
import { i18n } from "../../translations/i18n";

const RefundPolicies = () => {
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
            {i18n.t("pages.refundPolicies.returnpolicy.title")}
          </Typography>
          <Typography
            style={{
              textAlign: "justify",
              marginTop: "20px",
            }}
            dangerouslySetInnerHTML={{
              __html: i18n.t("pages.refundPolicies.returnpolicy.text"),
            }}
          />
          <Typography
            style={{
              textAlign: "justify",
            }}
            dangerouslySetInnerHTML={{
              __html: i18n.t("pages.refundPolicies.returnpolicy.text2"),
            }}
          />
          <Typography
            style={{
              textAlign: "justify",
            }}
            dangerouslySetInnerHTML={{
              __html: i18n.t("pages.refundPolicies.returnpolicy.text3"),
            }}
          />
          <Typography
            style={{
              textAlign: "justify",
            }}
            dangerouslySetInnerHTML={{
              __html: i18n.t("pages.refundPolicies.returnpolicy.text4"),
            }}
          />
          <Typography
            style={{
              textAlign: "justify",
            }}
            dangerouslySetInnerHTML={{
              __html: i18n.t("pages.refundPolicies.returnpolicy.text5"),
            }}
          />
          <Typography
            style={{
              textAlign: "justify",
            }}
            dangerouslySetInnerHTML={{
              __html: i18n.t("pages.refundPolicies.returnpolicy.text6"),
            }}
          />
          <Typography
            style={{
              textAlign: "justify",
            }}
            dangerouslySetInnerHTML={{
              __html: i18n.t("pages.refundPolicies.returnpolicy.text7"),
            }}
          />
          <Typography
            style={{
              textAlign: "justify",
              marginLeft: "30px",
            }}
            dangerouslySetInnerHTML={{
              __html: i18n.t("pages.refundPolicies.returnpolicy.text8"),
            }}
          />
          <Typography
            style={{
              textAlign: "justify",
            }}
            dangerouslySetInnerHTML={{
              __html: i18n.t("pages.refundPolicies.returnpolicy.text9"),
            }}
          />
          <Typography
            style={{
              textAlign: "justify",
            }}
            dangerouslySetInnerHTML={{
              __html: i18n.t("pages.refundPolicies.returnpolicy.text10"),
            }}
          />
        </div>
      </Box>
    </Box>
  );
};

export default RefundPolicies;
