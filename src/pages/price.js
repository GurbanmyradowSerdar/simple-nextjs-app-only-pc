import Footer from "@/components/Footer";
import Header from "@/components/Header";
import { LineWeight } from "@mui/icons-material";
import {
  Card,
  CardActionArea,
  Container,
  Divider,
  Grid,
  Stack,
  Typography,
} from "@mui/material";
import React from "react";

const myGreen = "#19BD9A";

const price = () => {
  return (
    <div
      style={{
        backgroundColor: "#F3F3F3",
        color: "#72777E",
      }}
    >
      <Header color={"black"} />
      <Container sx={{ minHeight: "100vh" }}>
        <Stack mt={10} spacing={10}>
          <Container maxWidth="sm">
            <Stack
              sx={{
                textAlign: "center",
              }}
              spacing={2}
            >
              <Typography
                sx={{
                  fontSize: "1.8rem",
                  textTransform: "uppercase",
                  letterSpacing: "3px",
                }}
              >
                Our price
              </Typography>
              <Typography sx={{ fontSize: "1rem", fontWeight: "bold" }}>
                At vero eos et accusamus et iusto odio dignissimos ducimus qui
                blanditiis praesentium
              </Typography>
            </Stack>
          </Container>
          <div>
            <Grid container spacing={2}>
              <Grid item xs={12} md={6} lg={4}>
                <Card elevation={10}>
                  <CardActionArea sx={{ backgroundColor: "white" }}>
                    <div>
                      <Stack
                        spacing={10}
                        height={"400px"}
                        sx={{ color: "#72777E" }}
                      >
                        <Typography
                          sx={{
                            textTransform: "uppercase",
                            textAlign: "center",
                            fontSize: "1.7rem",
                            backgroundColor: myGreen,
                            color: "white",
                            padding: "20px 0px",
                          }}
                        >
                          Premium
                        </Typography>
                        <Stack>
                          <Typography
                            sx={{
                              textAlign: "center",
                              fontSize: "1.9rem",
                              fontWeight: "bold",
                              color: myGreen,
                            }}
                          >
                            $ 60
                          </Typography>
                          <Typography
                            sx={{
                              textAlign: "center",
                              fontSize: "1.6rem",
                            }}
                          >
                            Per Month
                          </Typography>
                        </Stack>
                      </Stack>
                    </div>
                  </CardActionArea>
                </Card>
              </Grid>
              <Grid item xs={12} md={6} lg={4}>
                <Card elevation={10}>
                  <CardActionArea sx={{ backgroundColor: "white" }}>
                    <div>
                      <Stack
                        spacing={10}
                        height={"400px"}
                        sx={{ color: "#72777E" }}
                      >
                        <Typography
                          sx={{
                            textTransform: "uppercase",
                            textAlign: "center",
                            fontSize: "1.7rem",
                            backgroundColor: myGreen,
                            color: "white",
                            padding: "20px 0px",
                          }}
                        >
                          Premium-High
                        </Typography>
                        <Stack>
                          <Typography
                            sx={{
                              textAlign: "center",
                              fontSize: "1.9rem",
                              fontWeight: "bold",
                              color: myGreen,
                            }}
                          >
                            $ 70
                          </Typography>
                          <Typography
                            sx={{
                              textAlign: "center",
                              fontSize: "1.6rem",
                            }}
                          >
                            Per Month
                          </Typography>
                        </Stack>
                      </Stack>
                    </div>
                  </CardActionArea>
                </Card>
              </Grid>
              <Grid item xs={12} md={6} lg={4}>
                <Card elevation={10}>
                  <CardActionArea sx={{ backgroundColor: "white" }}>
                    <div>
                      <Stack
                        spacing={10}
                        height={"400px"}
                        sx={{ color: "#72777E" }}
                      >
                        <Typography
                          sx={{
                            textTransform: "uppercase",
                            textAlign: "center",
                            fontSize: "1.7rem",
                            backgroundColor: myGreen,
                            color: "white",
                            padding: "20px 0px",
                          }}
                        >
                          Exclusive
                        </Typography>
                        <Stack>
                          <Typography
                            sx={{
                              textAlign: "center",
                              fontSize: "1.9rem",
                              fontWeight: "bold",
                              color: myGreen,
                            }}
                          >
                            $ 80
                          </Typography>
                          <Typography
                            sx={{
                              textAlign: "center",
                              fontSize: "1.6rem",
                            }}
                          >
                            Per Month
                          </Typography>
                        </Stack>
                      </Stack>
                    </div>
                  </CardActionArea>
                </Card>
              </Grid>
            </Grid>
          </div>
        </Stack>
      </Container>
      <Divider />
      <Footer />
    </div>
  );
};

export default price;
