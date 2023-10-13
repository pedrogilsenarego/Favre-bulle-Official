import { Box, Divider, Grid, Typography } from "@mui/material";
import ControlledFormInput from "../../../../components/Inputs/ControlledInput";
import FileUploader from "../../../../components/Inputs/FileUploader";
import Loader from "../../../../components/Loader";
import Button from "../../../../components/Ui/Button";
import { i18n } from "../../../../translations/i18n";
import useStyles from "./styles";
import useCreateProduct from "./useCreateProduct";

interface Props {
  edit?: boolean;
}

const CreateProduct = ({ edit = false }: Props) => {
  const classes = useStyles();
  const {
    handleSubmit,
    onSubmit,
    control,
    setValue,
    setError,
    isCreatingProduct,
    isLoadingProduct,
  } = useCreateProduct({ edit });
  return (
    <>
      <Typography fontSize="16px">
        {i18n.t(
          "pages.admin.createProducts.title",
          "Manage Products - Create Product"
        )}
      </Typography>
      <Divider />
      {isCreatingProduct || (isLoadingProduct && edit) ? (
        <Loader
          customMessage={
            isCreatingProduct
              ? i18n.t(
                  "pages.admin.createProducts.isCreatingProduct",
                  "The product is being created"
                )
              : i18n.t(
                  "pages.admin.createProducts.isLoadingProduct",
                  "The product is being fetched"
                )
          }
        />
      ) : (
        <Box className={classes.root}>
          {" "}
          <form
            className={classes.form}
            id="createUser-form"
            onSubmit={handleSubmit(onSubmit)}
          >
            <Box className={classes.inputBox}>
              <Grid container spacing={2}>
                <Grid item xs={12}>
                  <FileUploader
                    name="thumbnail"
                    control={control}
                    setValue={setValue}
                    setError={setError}
                    fieldTitle={i18n.t(
                      "pages.admin.createProducts.form.thumbnail",
                      "Thumbnail"
                    )}
                  />
                </Grid>
                <Grid item xs={12}>
                  <FileUploader
                    name="specialThumbnail"
                    control={control}
                    setValue={setValue}
                    setError={setError}
                    fieldTitle={i18n.t(
                      "pages.admin.createProducts.form.specialThumbnail",
                      "Special Thumbnail"
                    )}
                  />
                </Grid>
                <Grid item xs={12}>
                  <FileUploader
                    name="images"
                    multiple
                    control={control}
                    setValue={setValue}
                    setError={setError}
                    fieldTitle={i18n.t(
                      "pages.admin.createProducts.form.images",
                      "Images"
                    )}
                  />
                </Grid>
                <Grid item xs={6}>
                  <ControlledFormInput
                    control={control}
                    name="model"
                    inputPlaceholder={i18n.t(
                      "pages.admin.createProducts.form.model",
                      "Model"
                    )}
                  />
                </Grid>
                <Grid item xs={6}>
                  <ControlledFormInput
                    control={control}
                    name="dimensions"
                    inputPlaceholder={i18n.t(
                      "pages.admin.createProducts.form.dimensions",
                      "Dimensions"
                    )}
                  />
                </Grid>
                <Grid item xs={6}>
                  <ControlledFormInput
                    control={control}
                    name="movement"
                    inputPlaceholder={i18n.t(
                      "pages.admin.createProducts.form.movement",
                      "Movement"
                    )}
                  />
                </Grid>
                <Grid item xs={6}>
                  <ControlledFormInput
                    control={control}
                    name="sku"
                    inputPlaceholder={i18n.t(
                      "pages.admin.createProducts.form.sku",
                      "SKU"
                    )}
                  />
                </Grid>
                <Grid item xs={6}>
                  <ControlledFormInput
                    control={control}
                    name="description"
                    inputPlaceholder={i18n.t(
                      "pages.admin.createProducts.form.description",
                      "Description"
                    )}
                  />
                </Grid>
                <Grid item xs={6}>
                  <ControlledFormInput
                    control={control}
                    name="color"
                    inputPlaceholder={i18n.t(
                      "pages.admin.createProducts.form.color",
                      "Color"
                    )}
                  />
                </Grid>
                <Grid item xs={6}>
                  <ControlledFormInput
                    control={control}
                    name="bracelet"
                    inputPlaceholder={i18n.t(
                      "pages.admin.createProducts.form.bracelet",
                      "Bracelet"
                    )}
                  />
                </Grid>
                <Grid item xs={6}>
                  <ControlledFormInput
                    control={control}
                    name="numberWatches"
                    inputPlaceholder={i18n.t(
                      "pages.admin.createProducts.form.numberWatches",
                      "Number Watches"
                    )}
                  />
                </Grid>
              </Grid>
            </Box>
            <Button type="submit">
              {i18n.t(
                "pages.admin.createProducts.form.submit",
                "Create Product"
              )}
            </Button>
          </form>
        </Box>
      )}
    </>
  );
};

export default CreateProduct;
