import { Box, Container, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import { mainColors } from "../../theme/theme";
import "./index.css";
import Image1 from "../../assets/001_watch sketch 2D.png";
import Image2 from "../../assets/54.png";

const DNA = () => {
  const [mouseX, setMouseX] = useState<number>(0);
  const maintext =
    "Our first line, ‘Three Peaks’ embodies the essence of the outdoors. The sense of living in the present moment, where time seems to slow down.</br></br> The feeling of peace being amongst the trees; the excitement of fresh snow fall; breathing in cool night air whilst adoring the constellations; summer walks through manicured vineyards, barefoot, feeling the powerful earth underneath you.</br></br> Each watch represents these moments. The moments that we cherish.";

  useEffect(() => {
    function handleMouseMove(event: { clientX: number; clientY: any }) {
      const xPercentage = (event.clientX / window.innerWidth) * 100;
      setMouseX(xPercentage);
    }

    window.addEventListener("mousemove", handleMouseMove);
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  useEffect(() => {
    const container = document.querySelector(".container") as HTMLElement;
    const firstBox = document.querySelector(".first-box") as HTMLElement;
    if (container) {
      container.style.setProperty("--cut-width", mouseX + "%");
    }
    if (firstBox) {
      firstBox.style.setProperty("--cut-width", mouseX + "%");
    }
  }, [mouseX]);

  return (
    <Container maxWidth="xl">
      <Box
        style={{
          width: "100%",
          display: "flex",
          justifyContent: "center",
          height: "90vh",
          alignItems: "top",
          position: "relative",
          marginBottom: "400px",
          paddingTop: "100px",
        }}
      >
        <Box className="first-box">
          <Box className="boxText">
            <Typography
              className="title"
              fontWeight={800}
              color={mainColors.primary[400]}
            >
              Three Peaks 
              <b style={{ color: mainColors.secondary[400] }}>FUTURE</b> :
            </Typography>
            <Typography
              className="mainTypo"
              fontWeight={800}
              color={mainColors.primary[400]}
              dangerouslySetInnerHTML={{ __html: maintext }}
            />
          </Box>
          <img src={Image1} alt="" />
        </Box>
        <Box
          className="container"
          style={{
            position: "absolute",
            //background: `linear-gradient(to right, ${mainColors.primary[40025]}, ${mainColors.primary[40005]})`,
            height: "100%",
            display: "flex",
            justifyContent: "center",

            overflow: "hidden",
          }}
        >
          <Box className="boxText">
            <Typography
              className="title"
              fontWeight={800}
              color={mainColors.primary[40060]}
            >
              Three Peaks ORIGIN:
            </Typography>
            <Typography
              className="mainTypo"
              fontWeight={800}
              color={mainColors.primary[40060]}
              dangerouslySetInnerHTML={{ __html: maintext }}
            />
          </Box>
          <img src={Image2} alt="" />
        </Box>
      </Box>
    </Container>
  );
};

export default DNA;
