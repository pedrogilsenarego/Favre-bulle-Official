import { Box, Typography, useMediaQuery, useTheme } from "@mui/material";
import { mainColors } from "../../theme/theme";

const BuySuccess = () => {
  const Theme = useTheme();
  const mobile = useMediaQuery(Theme.breakpoints.down("sm"));

  return (
    <Box
      display="flex"
      style={{
        alignItems: "center",
        textAlign: "center",
        minHeight: mobile ? "50vh" : "100vh",
        width: "100vw",
        paddingTop: mobile ? "100px" : "140px",
        paddingBottom: "100px",

        flexDirection: "column",
      }}
    >
      <Typography
        color={mainColors.primary[400]}
        fontSize={mobile ? "1rem" : "2rem"}
        fontWeight={800}
        mt={mobile ? "20px" : "80px"}
      >
        Favre-Bulle thanks you for buying with us.
      </Typography>
      <Typography
        color={mainColors.primary[400]}
        fontSize={mobile ? "1rem" : "2rem"}
        fontWeight={800}
        mt={mobile ? "20px" : "80px"}
      >
        We are most proud and happy to have you join to our team.
      </Typography>
    </Box>
  );
};

export default BuySuccess;
