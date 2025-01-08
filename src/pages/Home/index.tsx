import { Box, Container, Grid, Typography } from "@mui/material";
import { useEffect, useRef, useState } from "react";
import Button from "../../components/Ui/Button";
import { CSS, Colors, mainColors } from "../../theme/theme";
import { useNavigate } from "react-router-dom";
import { ROUTE_PATHS } from "../../routes/constants";
import Image1 from "../../assets/001_watch sketch 2D.png";
import Teaser from "../Teaser";
import Popup from "../../components/Popup";

const Home = () => {
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const [openPopup, setOpenPopup] = useState<boolean>(true);
  const videoUrl =
    "https://res.cloudinary.com/daantetcr/video/upload/v1735549363/favre-bulle/WhatsApp_Video_2024-12-29_at_18.22.36_4a5c13a6_vwsyms.mp4";
  const navigate = useNavigate();
  useEffect(() => {
    const video = videoRef.current;
    if (!video || !videoUrl) return;
    video.src = videoUrl;
  }, [videoUrl]);

  const handlePlayClick = () => {
    if (videoRef.current) {
      videoRef.current.play();
    }
  };

  const listImages = [
    "https://res.cloudinary.com/daantetcr/image/upload/v1735412048/favre-bulle/DSC01980_hpy0xu.jpg",
    "https://res.cloudinary.com/daantetcr/image/upload/v1735412044/favre-bulle/DSC02001_f011xn.jpg",
    "https://res.cloudinary.com/daantetcr/image/upload/v1735412041/favre-bulle/DSC01953_ldfnzm.jpg",
    "https://res.cloudinary.com/daantetcr/image/upload/v1735412039/favre-bulle/DSC02011_waeyv3.jpg",
    "https://res.cloudinary.com/daantetcr/image/upload/v1735412038/favre-bulle/DSC01908_moqelc.jpg",
    "https://res.cloudinary.com/daantetcr/image/upload/v1735412034/favre-bulle/DSC01938_cvcjnr.jpg",
    "https://res.cloudinary.com/daantetcr/image/upload/v1735412036/favre-bulle/DSC01929_afxs1h.jpg",
    "https://res.cloudinary.com/daantetcr/image/upload/v1735412031/favre-bulle/DSC01925_uwfyha.jpg",
    "https://res.cloudinary.com/daantetcr/image/upload/v1735412010/favre-bulle/DSC02027_gheyx9.jpg",
    "https://res.cloudinary.com/daantetcr/image/upload/v1735412038/favre-bulle/DSC01908_moqelc.jpg",
    "https://res.cloudinary.com/daantetcr/image/upload/v1735412046/favre-bulle/DSC01995_ppxvte.jpg",
    "https://res.cloudinary.com/daantetcr/image/upload/v1735412042/favre-bulle/DSC01926_ow1oo4.jpg",
  ];

  return (
    <>
      <Box
        height="600px"
        width="100%"
        position="relative"
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <video
          ref={videoRef}
          playsInline
          autoPlay
          preload="auto"
          loop
          muted
          src="https://youtu.be/rfTJ_X2DR6Q"
          width="100%"
          height="100%"
          style={{ objectFit: "cover" }}
        />
      </Box>
      <Container style={{ height: "100vh" }} maxWidth="xl">
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            height: "100%",
            alignItems: "center",
            justifyContent: "center",
            padding: "100px 0px",
            width: "100%",
          }}
        >
          <Box
            sx={{
              maxWidth: "700px",
              display: "flex",
              flexDirection: "column",
              rowGap: "20px",
            }}
          >
            <Typography sx={{ textAlign: "center", fontSize: "20px" }}>
              Press Corner
            </Typography>
            <Typography
              sx={{
                textAlign: "center",
                fontSize: "32px",
                letterSpacing: "3px",
                fontWeight: 500,
                lineHeight: "38px",
                fontFamily: "Urban",
              }}
            >
              "is simply dummy text of the printing and typesetting industry.
              Lorem Ipsum has been the industry's standard dummy text ever since
              the 1500s, when an unknown printer took a galley of type and
              scrambled it to make a type specimen book. It has survived not
              only five centuries, but also the leap into electronic
              typesetting, remaining essentially unchanged. It was popularised
              in the 1960s with the release of Letraset sheet"
            </Typography>
          </Box>
        </Box>
      </Container>

      <Box
        style={{
          backgroundImage: `url("https://res.cloudinary.com/daantetcr/image/upload/v1735412046/favre-bulle/DSC01995_ppxvte.jpg")`,
          width: "100%",
          height: "90vh",
          backgroundSize: "cover",
          backgroundPosition: "center",
          position: "relative",
        }}
      >
        <Box
          style={{
            backgroundColor: "white",
            padding: "25px 25px",
            position: "absolute",
            bottom: "22%",
            right: "50px",
          }}
        >
          <Typography
            style={{
              color: mainColors.secondary[400],
              letterSpacing: "1px",
              fontSize: "32px",
            }}
          >
            Favre-Bulle Three Peeks
          </Typography>
          <Typography
            style={{ color: mainColors.primary[400], textAlign: "center" }}
          >
            A watch to ...
          </Typography>
          <Button
            fullWidth
            darkenColors
            style={{ marginTop: "20px" }}
            onClick={() => navigate(ROUTE_PATHS.COLLECTIONS)}
          >
            <Typography>Discover More</Typography>
          </Button>
        </Box>
      </Box>
      <Container
        style={{ height: "100vh", marginBottom: "100px", marginTop: "100px" }}
        maxWidth="xl"
      >
        <Grid container height="100%">
          <Grid
            item
            xs={6}
            style={{
              height: "100%",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <img src={Image1} alt="" style={{ height: "80%" }} />
          </Grid>
          <Grid
            item
            xs={6}
            style={{
              height: "100%",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Box
              style={{
                display: "flex",
                flexDirection: "column",
                rowGap: "20px",
                width: "70%",
              }}
            >
              <Typography
                style={{
                  color: mainColors.primary[400],
                  fontSize: "32px",
                  fontWeight: 700,
                }}
              >
                Favre-Bulle DNA
              </Typography>
              <Typography
                style={{
                  color: mainColors.primary[400],
                }}
              >
                Discover the story behind the building of a watch that was
                created to break wallsDiscover the story behind the building of
                a watch that was created to break wallsDiscover the story behind
                the building of a watch that was created to break walls
              </Typography>
              <Button
                darkenColors
                fullWidth
                onClick={() => navigate(ROUTE_PATHS.DNA)}
              >
                <Typography>Learn More</Typography>
              </Button>
            </Box>
          </Grid>
        </Grid>
      </Container>
      <Popup
        openPopup={openPopup}
        setOpenPopup={setOpenPopup}
        onClose={() => setOpenPopup(false)}
      >
        <Teaser setOpenPopup={setOpenPopup} />
      </Popup>
      {/* <Container
        maxWidth="xl"
        sx={{
          padding: "100px 0px",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Grid container spacing={4}>
          {listImages.map((image, index) => {
            return (
              <Grid
                key={index}
                item
                xs={2}
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <img
                  src={image}
                  alt=""
                  style={{ objectFit: "contain", width: "70%" }}
                />
              </Grid>
            );
          })}
        </Grid>
      </Container> */}
    </>
  );
};

export default Home;
