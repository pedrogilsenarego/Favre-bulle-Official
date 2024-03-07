import { Box, Grid, Typography } from "@mui/material";
import Loader from "../../components/Loader";

import Accordion from "../../components/Accordion";
import { Icons } from "../../components/Icons";

import Button from "../../components/Ui/Button";
import { mainColors } from "../../theme/theme";
import { i18n } from "../../translations/i18n";
import useProduct from "./useProduct";
import ToolTipJ from "../../components/Tooltip/Tooltip";
import Warrenty from "../../assets/labullealex_Warranty.svg";
import AfterCare from "../../assets/labullealex_Aftercare Service.svg";
import ReturnPolicy from "../../assets/labullealex_Return policy.svg";
import Dimensions from "../../assets/labullealex_Dimensions.svg";
import Glass from "../../assets/labullealex_Glass.svg";
import Case from "../../assets/labullealex_Case.svg";
import Movement from "../../assets/labullealex_Movement.svg";
import Strap from "../../assets/labullealex_Strap.svg";

const Product = () => {
  const {
    isLoadingProduct,
    productData,
    handleProductToCart,
    mainImage,
    setMainImage,
    mobile,
  } = useProduct();
  return isLoadingProduct ? (
    <Loader />
  ) : (
    <Box
      display="flex"
      justifyContent="center"
      mt="50px"
      margin="50px 20px 0px 20px"
    >
      <Grid container columnSpacing="40px" maxWidth="xl">
        <Grid item xs={12} md={6}>
          <img
            src={productData?.images[mainImage]}
            style={{ width: "100%", height: "700px", objectFit: "cover" }}
            alt=""
          />
          <Box style={{ display: "flex", columnGap: "10px" }}>
            {productData?.images.map((image: string, index: number) => {
              return (
                <img
                  onClick={() => setMainImage(index)}
                  key={index}
                  src={image}
                  alt=""
                  style={{
                    cursor: "pointer",
                    height: "100px",
                    width: "100px",
                    objectFit: "contain",
                    padding: "2px",
                    border:
                      mainImage === index
                        ? `solid 2px ${mainColors.primary[40080]}`
                        : "none",
                  }}
                />
              );
            })}
          </Box>
        </Grid>
        <Grid item xs={12} md={6}>
          <Box>
            <Typography
              style={{
                fontSize: "20px",
                color: mainColors.secondary[400],
                textTransform: "capitalize",
              }}
            >
              {productData?.model}
            </Typography>
            <Box
              mt={"40px"}
              style={{
                display: "flex",
                flexDirection: "column",
                rowGap: "20px",
              }}
            >
              <div style={{ cursor: "pointer" }}>
                <ToolTipJ title={i18n.t("pages.myCollection.VAT")}>
                  <Typography
                    style={{
                      fontSize: "20px",

                      display: "inline-block",
                    }}
                  >
                    CHF {productData?.price?.toFixed(2) || "N.A."}*
                  </Typography>
                </ToolTipJ>
              </div>
              <Box
                style={{
                  display: "flex",
                  columnGap: "6px",
                  alignItems: "center",
                }}
              >
                <Icons.Swiss size="26px" color={mainColors.primary[400]} />
                <Typography style={{}}>Swiss Made</Typography>
              </Box>
              <Typography style={{}}>
                The first batch of watches will be delivered in the month of May
              </Typography>
              <Button fullWidth darkenColors onClick={handleProductToCart}>
                <Typography>Add to Cart</Typography>
              </Button>
              <Typography
                component="div"
                dangerouslySetInnerHTML={{
                  __html: i18n.t("technicalDetails.description") as string,
                }}
                style={{}}
              ></Typography>
              <Box
                style={{
                  display: "flex",

                  justifyContent: "space-around",
                }}
              >
                <ToolTipJ
                  title={i18n.t("pages.myCollection.warrenty")}
                  placement="bottom"
                >
                  <img
                    src={Warrenty}
                    alt=""
                    style={{ height: "100px", cursor: "pointer" }}
                  />
                </ToolTipJ>
                <ToolTipJ
                  title={i18n.t("pages.myCollection.aftercareService")}
                  placement="bottom"
                >
                  <img
                    src={AfterCare}
                    alt=""
                    style={{ height: "100px", cursor: "pointer" }}
                  />
                </ToolTipJ>
                <ToolTipJ
                  title={i18n.t("pages.myCollection.return")}
                  placement="bottom"
                >
                  <img
                    src={ReturnPolicy}
                    alt=""
                    style={{ height: "100px", cursor: "pointer" }}
                  />
                </ToolTipJ>
              </Box>
            </Box>
            <Box style={{ marginTop: "20px" }}>
              <Accordion title="Technical Specifications">
                <Box style={{ display: "flex", alignItems: "center" }}>
                  <img
                    src={Dimensions}
                    alt=""
                    style={{
                      height: mobile ? "60px" : "80px",
                      cursor: "pointer",
                    }}
                  />
                  <Typography>
                    {i18n.t("pages.myCollection.dimensions")}
                  </Typography>
                </Box>
                <Box style={{ display: "flex", alignItems: "center" }}>
                  <img
                    src={Glass}
                    alt=""
                    style={{
                      height: mobile ? "60px" : "80px",
                      cursor: "pointer",
                    }}
                  />
                  <Typography>{i18n.t("pages.myCollection.glass")}</Typography>
                </Box>
                <Box style={{ display: "flex", alignItems: "center" }}>
                  <img
                    src={Case}
                    alt=""
                    style={{
                      height: mobile ? "60px" : "80px",
                      cursor: "pointer",
                    }}
                  />
                  <Typography>{i18n.t("pages.myCollection.case")}</Typography>
                </Box>
                <Box style={{ display: "flex", alignItems: "center" }}>
                  <img
                    src={Movement}
                    alt=""
                    style={{
                      height: mobile ? "60px" : "80px",
                      cursor: "pointer",
                    }}
                  />
                  <Typography>
                    {i18n.t("pages.myCollection.movement")}
                  </Typography>
                </Box>
                <Box style={{ display: "flex", alignItems: "center" }}>
                  <img
                    src={Strap}
                    alt=""
                    style={{
                      height: mobile ? "60px" : "80px",
                      cursor: "pointer",
                    }}
                  />
                  <Typography>{i18n.t("pages.myCollection.strap")}</Typography>
                </Box>
              </Accordion>
            </Box>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Product;
