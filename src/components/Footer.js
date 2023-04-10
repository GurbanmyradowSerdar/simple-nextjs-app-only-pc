import { Container, IconButton, Link, Stack, Typography } from "@mui/material";
import React from "react";

const footerStyles = {
  padding: "5px",
  borderRadius: "50%",
  width: "40px",
  objectFit: "contain",
};

const Footer = () => {
  return (
    <div style={{ backgroundColor: "#F3F3F3" }}>
      <Container>
        <Stack
          alignItems={"center"}
          spacing={2}
          sx={{ backgroundColor: "#F3F3F3" }}
          p={1}
        >
          <Typography fontSize={"2rem"} color={"black"} fontWeight={"800"}>
            Bouncy
          </Typography>
          <Typography color={"gray"}>
            Copyright 2015. All rights Reserved
          </Typography>

          <Stack direction={"row"} spacing={2}>
            <Link href="#">
              <img
                src="/facebook.png"
                style={{
                  ...footerStyles,
                }}
              />
            </Link>
            <Link href="#">
              <img
                src="/twitter.png"
                style={{
                  ...footerStyles,
                }}
              />
            </Link>
            <Link href="#">
              <img
                src="/linkedin.png"
                style={{
                  ...footerStyles,
                }}
              />
            </Link>
            <Link href="#">
              <img
                src="/instagram.png"
                style={{
                  ...footerStyles,
                }}
              />
            </Link>
            <Link href="#">
              <img
                src="/vimeo.png"
                style={{
                  ...footerStyles,
                }}
              />
            </Link>
          </Stack>
        </Stack>
      </Container>
    </div>
  );
};

export default Footer;
