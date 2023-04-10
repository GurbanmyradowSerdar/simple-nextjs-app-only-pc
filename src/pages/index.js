import Header from "@/components/Header";
import { Container, Stack, Typography } from "@mui/material";
import React from "react";

const home = () => {
  return (
    <div
      style={{
        background: "url(/home-page.jpg) no-repeat center center fixed",
        backgroundSize: "cover",
        minHeight: "100vh",
      }}
    >
      <Header color="white" />
      <Container maxWidth="sm" sx={{ textAlign: "center" }}>
        <Stack
          justifyContent={"center"}
          alignItems={"center"}
          minHeight={"60vh"}
          spacing={3}
        >
          <Typography
            color="white"
            sx={{ fontSize: "2.3rem", fontWeight: "thin" }}
          >
            We Are Code Cafe
          </Typography>
          <Typography color={"white"} sx={{ fontSize: "1.2rem" }}>
            At vero eos et accusamus et iusto odio dignissimos ducimus qui
            blanditiis praesentium voluptatum
          </Typography>
        </Stack>
      </Container>
    </div>
  );
};

export default home;
