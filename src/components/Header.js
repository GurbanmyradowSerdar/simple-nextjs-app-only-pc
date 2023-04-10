import { Container, Link, Stack } from "@mui/material";
import React, { useEffect, useState } from "react";

const black = {
  padding: "5px 20px",
  borderRadius: "20px",
  ":hover": {
    border: "1px solid black",
    borderRadius: "20px",
  },
  transition: "all 0.8s",
};

const white = {
  padding: "5px 20px",
  borderRadius: "20px",
  ":hover": {
    border: "1px solid white",
    borderRadius: "20px",
  },
  transition: "all 0.8s",
};

const Header = ({ color }) => {
  const [style, setStyle] = useState();

  useEffect(() => {
    color == "white" ? setStyle(white) : setStyle(black);
  }, []);

  return (
    <div>
      <Container>
        <Stack
          direction={"row"}
          justifyContent={"space-between"}
          alignItems={"center"}
        >
          <Link
            underline="none"
            href="/"
            fontSize={"2.5rem"}
            color={color}
            fontWeight={"800"}
          >
            Bouncy
          </Link>
          <Stack direction={"row"} spacing={3}>
            <Link
              underline="none"
              href="/"
              fontSize={"1.2rem"}
              color={color}
              sx={{ ...style }}
            >
              Home
            </Link>
            <Link
              underline="none"
              href="/about"
              fontSize={"1.2rem"}
              color={color}
              sx={{ ...style }}
            >
              About us
            </Link>
            <Link
              underline="none"
              href="/price"
              fontSize={"1.2rem"}
              color={color}
              sx={{ ...style }}
            >
              Prices
            </Link>
            <Link
              underline="none"
              href="/contact"
              fontSize={"1.2rem"}
              color={color}
              sx={{ ...style }}
            >
              Contacts
            </Link>
          </Stack>
        </Stack>
      </Container>
    </div>
  );
};

export default Header;
