import {
  Box,
  Container,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import { useEffect, useState } from "react";
import { mainColors } from "../../theme/theme";
import "./index.css";
import Image1 from "../../assets/001_watch sketch 2D.png";
import Image2 from "../../assets/54.png";
import Logo from "../../assets/logo.svg";

const DNA = () => {
  const [mouseX, setMouseX] = useState<number>(0);
  const Theme = useTheme();
  const mobile = useMediaQuery(Theme.breakpoints.down("sm"));
  const maintext =
    "Our first line, ‘Three Peaks’ embodies the essence of the outdoors. The sense of living in the present moment, where time seems to slow down.</br></br> The feeling of peace being amongst the trees; the excitement of fresh snow fall; breathing in cool night air whilst adoring the constellations; summer walks through manicured vineyards, barefoot, feeling the powerful earth underneath you.</br></br> Each watch represents these moments. The moments that we cherish.";
  const secondText =
    "We believe that good quality movements and beautiful designs should be accessible to you.</br></br>Our mechanical watches are designed to be functionally resilient for daily life; but also essential in complimenting your style.</br></br> We take inspiration from things that make us happy. We aim to pass that on to you.";
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

  const renderLaptop = () => {
    return (
      <Container maxWidth="xl">
        <Box
          style={{
            width: "100%",
            display: "flex",
            justifyContent: "center",
            height: "110vh",
            alignItems: "top",
            position: "relative",
            marginBottom: "400px",
          }}
        >
          <Box className="first-box">
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                marginTop: "100px",
              }}
            >
              <Box className="boxText">
                <Typography
                  className="title"
                  fontWeight={800}
                  color={mainColors.primary[400]}
                >
                  Three Peaks ORIGIN:
                </Typography>
                <Typography
                  className="mainTypo"
                  fontWeight={800}
                  color={mainColors.primary[400]}
                  dangerouslySetInnerHTML={{ __html: maintext }}
                />
              </Box>
              <img src={Image1} alt="" style={{ width: "50%" }} />
            </div>
            <div
              style={{
                display: "flex",
                marginTop: "100px",
                justifyContent: "center",
                gap: "100px",
              }}
            >
              <img src={Logo} alt="" style={{ width: "40%" }} />
              <Typography
                className="mainTypo"
                style={{ textAlign: "right" }}
                fontWeight={800}
                color={mainColors.primary[400]}
                dangerouslySetInnerHTML={{ __html: secondText }}
              />
            </div>
          </Box>
          <Box
            className="container"
            style={{
              position: "absolute",
              //background: `linear-gradient(to right, ${mainColors.primary[40025]}, ${mainColors.primary[40005]})`,

              overflow: "hidden",
            }}
          >
            {" "}
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                marginTop: "100px",
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
              <img src={Image2} alt="" style={{ width: "50%" }} />
            </div>
            <div
              style={{
                display: "flex",
                marginTop: "100px",
                justifyContent: "center",
                gap: "100px",
              }}
            >
              <img src={Logo} alt="" style={{ width: "40%", opacity: 0.6 }} />
              <Typography
                className="mainTypo"
                style={{ textAlign: "right" }}
                fontWeight={800}
                color={mainColors.primary[40060]}
                dangerouslySetInnerHTML={{ __html: secondText }}
              />
            </div>
          </Box>
        </Box>
      </Container>
    );
  };

  const renderMobile = () => {
    return (
      <>
        {" "}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            marginTop: "100px",
            margin: "0px 10px",
          }}
        >
          <Box>
            <Typography
              className="title"
              fontWeight={800}
              style={{ textAlign: "center" }}
              color={mainColors.primary[400]}
            >
              Three Peaks ORIGIN:
            </Typography>
            <Typography
              fontWeight={800}
              style={{ marginTop: "30px", textAlign: "center" }}
              color={mainColors.primary[400]}
              dangerouslySetInnerHTML={{ __html: maintext }}
            />
          </Box>
          <div style={{ display: "flex", marginTop: "20px" }}>
            <img src={Image2} alt="" style={{ width: "50%" }} />
            <img src={Image1} alt="" style={{ width: "50%" }} />
          </div>
          <Typography
            fontWeight={800}
            style={{ marginTop: "30px", textAlign: "center" }}
            color={mainColors.primary[400]}
            dangerouslySetInnerHTML={{ __html: secondText }}
          />
          <div
            style={{
              display: "flex",
              marginTop: "40px",
              justifyContent: "center",
            }}
          >
            <img src={Logo} alt="" style={{ width: "50%" }} />
          </div>
        </div>
      </>
    );
  };

  return mobile ? renderMobile() : renderLaptop();
};

export default DNA;
