import { Box, Grid, Typography, useMediaQuery, useTheme } from "@mui/material";
import Watch from "../../assets/54.png";
import { useEffect, useState } from "react";
import { Colors } from "../../theme/theme";
import useStyles from "./styles";
import useTeaser from "./useteaser";
import ControlledFormInput from "../../components/Inputs/ControlledInput";
import { i18n } from "../../translations/i18n";
import Button from "../../components/Ui/Button";

const Teaser = ({
  setOpenPopup,
}: {
  setOpenPopup: (signal: boolean) => void;
}) => {
  const Theme = useTheme();
  const mobile = useMediaQuery(Theme.breakpoints.down("sm"));
  const classes = useStyles();
  const { control, handleSubmit, onSubmit } = useTeaser();
  const targetDate = new Date("September 10, 2024 00:00:00");
  targetDate.setDate(1); // Set the day to the 1st
  targetDate.setHours(0, 0, 0, 0); // Set the time to midnight

  // Calculate the remaining time until the target date
  const calculateRemainingTime = () => {
    const now = new Date();
    const difference = targetDate.getTime() - now.getTime();

    // Calculate remaining days, hours, minutes, and seconds
    const days = Math.floor(difference / (1000 * 60 * 60 * 24));
    const hours = Math.floor(
      (difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
    );
    const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((difference % (1000 * 60)) / 1000);

    return { days, hours, minutes, seconds };
  };

  const [remainingTime, setRemainingTime] = useState(calculateRemainingTime());

  useEffect(() => {
    // Update remaining time every second
    const interval = setInterval(() => {
      setRemainingTime(calculateRemainingTime());
    }, 1000);

    // Cleanup interval
    return () => clearInterval(interval);
  }, []);
  return (
    <div
      style={{
        width: "100%",
        display: "flex",
        alignItems: "center",
        padding: "30px",
        flexDirection: "column",
      }}
    >
      <Typography
        style={{
          fontSize: mobile ? "20px" : "16px",
          textTransform: "uppercase",
        }}
      >
        Don't Miss the launch
      </Typography>
      <Typography
        style={{
          fontSize: mobile ? "18px" : "40px",
          fontWeight: "bold",
        }}
      >
        Time until launch
      </Typography>
      <Typography
        style={{
          fontSize: mobile ? "18px" : "20px",
          marginTop: "20px",
          borderBottom: `solid 2px ${Colors.redish[400]}`,
        }}
      >
        {remainingTime.days} days, {remainingTime.hours} hours,{" "}
        {remainingTime.minutes} minutes, {remainingTime.seconds} seconds
      </Typography>
      <form
        style={{ marginTop: mobile ? "40px" : "100px" }}
        className={classes.form}
        id="login-in"
        onSubmit={handleSubmit(onSubmit)}
      >
        <Box className={classes.inputBox}>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <ControlledFormInput
                control={control}
                name="email"
                inputPlaceholder={i18n.t("pages.auth.login.email", "Email")}
              />
            </Grid>
          </Grid>
        </Box>
        <Box
          style={{
            display: "flex",
            flexDirection: "column",
            rowGap: "15px",
            justifyContent: "center",
            alignItems: "center",
            width: "100%",
          }}
        >
          <Button
            fullWidth
            darkenColors
            type="submit"
            style={{ color: Colors.blackish[400] }}
          >
            Subscription
          </Button>
        </Box>
      </form>
    </div>
  );
};

export default Teaser;
