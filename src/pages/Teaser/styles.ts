import { makeStyles } from "@mui/styles";

//interface Props extends CSSProperties {}

const useStyles = makeStyles({
  root: {
    marginTop: "80px",
    display: "flex",
    flexDirection: "column",
    rowGap: "60px",
    alignItems: "center",
  },
  form: {
    maxWidth: "500px",
    display: "flex",
    flexDirection: "column",
    rowGap: "40px",
    marginTop: "100px",
  },
  inputBox: {
    display: "flex",
    flexDirection: "column",
    rowGap: "20px",
  },
  register: {
    cursor: "pointer",
    fontWeight: 700,
    textDecoration: "underline",
  },
});

export default useStyles;
