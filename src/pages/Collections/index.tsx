import { Box, Container, Grid, Typography } from "@mui/material";
import Loader from "../../components/Loader";
import Button from "../../components/Ui/Button";
import { mainColors } from "../../theme/theme";
import { Product } from "../../types/product";
import useCollections from "./useCollections";

const Collections = () => {
  const {
    loadingProducts,
    productsData,
    handleClickProduct,
    handleProductToCart,
  } = useCollections();

  return loadingProducts ? (
    <Loader customMessage="Getting Products" />
  ) : (
    <Box>
      <Box
        style={{
          backgroundImage: `url("https://ba111od.com/cdn/shop/files/IMG_3841.jpg?v=1668782447&width=1920")`,
          width: "100%",
          height: "500px",
          backgroundSize: "cover",
          backgroundPosition: "center",
          position: "relative",
        }}
      >
        <Box
          style={{
            backgroundColor: "white",
            padding: "25px 15px",
            position: "absolute",
            bottom: "50px",
            left: "50px",
          }}
        >
          <Typography
            style={{ color: mainColors.secondary[400], letterSpacing: "1px" }}
          >
            The winter collection
          </Typography>
          <Typography
            style={{ color: mainColors.primary[400], fontSize: "20px" }}
          >
            This is the first collection from our beloved brand
          </Typography>
        </Box>
      </Box>
      <Container maxWidth="xl">
        <Grid
          container
          style={{
            display: "flex",
            width: "100%",
            justifyContent: "space-between",

            marginTop: "80px",
            rowGap: "60px",
          }}
        >
          {productsData.map((product: Product) => {
            return (
              <Grid
                item
                xs={12}
                md={1}
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  rowGap: "20px",
                }}
              >
                <img
                  onClick={() => handleClickProduct(product.id)}
                  src={product.specialThumbnail}
                  alt=""
                  key={product.sku}
                  style={{
                    width: "100%",
                    //height: "500px",
                    cursor: "pointer",
                    objectFit: "cover",
                  }}
                />
                <Box
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                  }}
                >
                  <Typography fontWeight={700} textAlign={"center"}>
                    {product.model}
                  </Typography>
                  <Typography>CHF {product.price},00</Typography>
                  <Button
                    fullWidth
                    darkenColors
                    onClick={() => handleProductToCart(product)}
                  >
                    <Typography style={{ fontSize: "14px" }}>
                      Add to Cart
                    </Typography>
                  </Button>
                </Box>
              </Grid>
            );
          })}
        </Grid>
      </Container>
    </Box>
  );
};

export default Collections;
