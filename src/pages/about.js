import Footer from "@/components/Footer";
import Header from "@/components/Header";
import { Container, Divider, Link, Stack, Typography } from "@mui/material";
import React from "react";

const styleForIcons = {
  backgroundColor: "#81868E",
  padding: "15px",
  borderRadius: "50%",
  ":hover": {
    backgroundColor: "#19BD9A",
  },
  transition: "all 0.8s",
};

const imageStyle = {
  width: "25px",
  height: "25px",
  objectFit: "contain",
};

const about = () => {
  return (
    <div style={{ backgroundColor: "#F3F3F3", color: "#485059" }}>
      <Container sx={{ minHeight: "100vh" }}>
        <Header color={"black"} />
        <Stack spacing={8} mt={10}>
          <Stack sx={{ textAlign: "center" }} spacing={3}>
            <Typography
              sx={{
                textTransform: "uppercase",
                letterSpacing: "3px",
                fontSize: "2rem",
              }}
            >
              DetailS ABOUT BOUNCY
            </Typography>
            <Typography sx={{ fontWeight: "bold" }}>
              At vero eos et accusamus et iusto odio dignissimos ducimus qui
              blanditiis praesentium
            </Typography>
          </Stack>
          <Stack
            spacing={3}
            direction={"row"}
            alignItems={"center"}
            justifyContent={"center"}
          >
            <Link href="#" sx={{ ...styleForIcons }}>
              <img src="/heart.png" alt="icon" style={{ ...imageStyle }} />
            </Link>
            <Link href="#" sx={{ ...styleForIcons }}>
              <img src="/mouse.png" alt="icon" style={{ ...imageStyle }} />
            </Link>
            <Link href="#" sx={{ ...styleForIcons }}>
              <img src="/lamp.png" alt="icon" style={{ ...imageStyle }} />
            </Link>
          </Stack>
          <Stack direction={"row"} spacing={20} alignItems={"flex-end"}>
            <Stack spacing={5}>
              <Typography sx={{ fontSize: "1.8rem" }}>
                Creative Ideas
              </Typography>
              <Typography sx={{ fontSize: "1rem" }}>
                At vero eos et accusamus et iusto odio dignissimos ducimus qui
                blanditiis praesentium voluptatum deleniti atque corrupti quos
                dolores
              </Typography>
            </Stack>
            <Typography sx={{ fontSize: "1rem" }}>
              At vero eos et accusamus et iusto odio dignissimos ducimus qui
              blanditiis praesentium voluptatum deleniti atque corrupti quos
              dolores et quas molestias excepturi sint occaecati cupiditate non
              provident, similique sunt in culpa qui officia deserunt mollitia
              animi, id est laborum et dolorum fuga. Et harum quidem r
            </Typography>
          </Stack>
        </Stack>
      </Container>
      <Divider />
      <Footer />
    </div>
  );
};

export default about;
