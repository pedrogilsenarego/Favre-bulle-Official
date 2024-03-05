import { Box, Grid, Typography } from "@mui/material";
import Loader from "../../components/Loader";

import Accordion from "../../components/Accordion";
import { Icons } from "../../components/Icons";

import Button from "../../components/Ui/Button";
import { mainColors } from "../../theme/theme";
import { i18n } from "../../translations/i18n";
import useProduct from "./useProduct";
import ToolTipJ from "../../components/Tooltip/Tooltip";

const Product = () => {
  const {
    isLoadingProduct,
    productData,
    handleProductToCart,
    mainImage,
    setMainImage,
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
                  columnGap: "6px",
                  alignItems: "center",
                }}
              >
                <Icons.Droplet size="26px" color={mainColors.primary[400]} />
                <Typography>Free World Shipping</Typography>
              </Box>
              <Box
                style={{
                  display: "flex",
                  columnGap: "6px",
                  alignItems: "center",
                }}
              >
                <Icons.Dial size="26px" color={mainColors.primary[400]} />
                <Typography>Free Return in 14 days</Typography>
              </Box>{" "}
              <Box
                style={{
                  display: "flex",
                  columnGap: "6px",
                  alignItems: "center",
                }}
              >
                <Icons.Edit size="26px" color={mainColors.primary[400]} />
                <Typography>2 years of internation warrenty</Typography>
              </Box>
            </Box>
            <Box style={{ marginTop: "20px" }}>
              <Accordion title="Technical Specifications">
                <Box>
                  <Typography>Movement</Typography>
                  <Typography>{i18n.t("technicalDetails.movement")}</Typography>
                </Box>
                <Box>
                  <Typography>Functions</Typography>
                  <Typography>
                    {i18n.t("technicalDetails.functions")}
                  </Typography>
                </Box>
                <Box>
                  <Typography>Case</Typography>
                  <Typography>{i18n.t("technicalDetails.case")}</Typography>
                </Box>
                <Box>
                  <Typography>Strap</Typography>
                  <Typography>{i18n.t("technicalDetails.strap")}</Typography>
                </Box>
                <Box>
                  <Typography>Dial</Typography>
                  <Typography>{i18n.t("technicalDetails.dial")}</Typography>
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
