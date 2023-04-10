import Footer from "@/components/Footer";
import Header from "@/components/Header";
import {
  Button,
  Card,
  CardMedia,
  Container,
  Divider,
  Grid,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import React from "react";

const contact = () => {
  return (
    <Stack>
      <div
        style={{
          backgroundColor: "#F3F3F3",
          color: "#72777E",
        }}
      >
        <Header color={"black"} />
        <Container sx={{ minHeight: "100vh" }}>
          <Stack mt={5} spacing={5}>
            <Container maxWidth="sm">
              <Stack
                spacing={3}
                justifyItems={"center"}
                alignItems={"center"}
                sx={{ textAlign: "center" }}
              >
                <Typography
                  sx={{
                    fontSize: "1.8rem",
                    textTransform: "uppercase",
                    letterSpacing: "3px",
                  }}
                >
                  Contact us
                </Typography>
                <Typography
                  sx={{
                    fontSize: "1rem",
                  }}
                >
                  At vero eos et accusamus et iusto odio dignissimos ducimus qui
                  blanditiis praesentium
                </Typography>
              </Stack>
            </Container>
            <div>
              <Grid container spacing={3}>
                <Grid item xs={12} md={6} lg={4}>
                  <Card elevation={10}>
                    <Stack
                      spacing={3}
                      sx={{ textAlign: "center", color: "#72777E" }}
                    >
                      <img src="/email-photo.png" alt="email-photo" />
                      <div
                        style={{
                          paddingBottom: "30px",
                        }}
                      >
                        <Typography
                          sx={{
                            color: "black",
                            textTransform: "uppercase",
                            fontSize: "1.6rem",
                          }}
                        >
                          Email
                        </Typography>
                        <Stack mt={3}>
                          <Typography
                            sx={{
                              textTransform: "uppercase",
                              fontSize: "1.4rem",
                            }}
                          >
                            hello@codecafe.com
                          </Typography>
                          <Typography
                            sx={{
                              textTransform: "uppercase",
                              fontSize: "1.4rem",
                            }}
                          >
                            Personal@codecafe.com
                          </Typography>
                        </Stack>
                      </div>
                    </Stack>
                  </Card>
                </Grid>
                <Grid item xs={12} md={6} lg={4}>
                  <Card elevation={10}>
                    <Stack
                      spacing={3}
                      sx={{ textAlign: "center", color: "#72777E" }}
                    >
                      <img src="/address-photo.png" alt="address-photo" />
                      <div
                        style={{
                          paddingBottom: "30px",
                        }}
                      >
                        <Typography
                          sx={{
                            color: "black",
                            textTransform: "uppercase",
                            fontSize: "1.6rem",
                          }}
                        >
                          Our office
                        </Typography>
                        <Stack mt={3}>
                          <Typography
                            sx={{
                              textTransform: "uppercase",
                              fontSize: "1.4rem",
                            }}
                          >
                            240 Bhatikhana, 8200 Barisal
                          </Typography>
                          <Typography
                            sx={{
                              textTransform: "uppercase",
                              fontSize: "1.4rem",
                            }}
                          >
                            Bangladesh
                          </Typography>
                        </Stack>
                      </div>
                    </Stack>
                  </Card>
                </Grid>
                <Grid item xs={12} md={6} lg={4}>
                  <Card elevation={10}>
                    <Stack
                      spacing={3}
                      sx={{ textAlign: "center", color: "#72777E" }}
                    >
                      <img src="/phone-photo.png" alt="phone-photo" />
                      <div
                        style={{
                          paddingBottom: "30px",
                        }}
                      >
                        <Typography
                          sx={{
                            color: "black",
                            textTransform: "uppercase",
                            fontSize: "1.6rem",
                          }}
                        >
                          Phone
                        </Typography>
                        <Stack mt={3}>
                          <Typography
                            sx={{
                              textTransform: "uppercase",
                              fontSize: "1.4rem",
                            }}
                          >
                            +00 11 66 99 66 44
                          </Typography>
                          <Typography
                            sx={{
                              textTransform: "uppercase",
                              fontSize: "1.4rem",
                            }}
                          >
                            11 99 66 44 065
                          </Typography>
                        </Stack>
                      </div>
                    </Stack>
                  </Card>
                </Grid>
              </Grid>
            </div>
          </Stack>
        </Container>
      </div>
      <div>
        <Container sx={{ minHeight: "100vh" }}>
          <Stack spacing={3} mt={6} mb={6}>
            <Grid container spacing={2}>
              <Grid item xs={12} md={6} lg={4}>
                <TextField label="Your name" variant="outlined" fullWidth />
              </Grid>
              <Grid item xs={12} md={6} lg={4}>
                <TextField label="Email address" variant="outlined" fullWidth />
              </Grid>
              <Grid item xs={12} md={6} lg={4}>
                <TextField label="Subject" variant="outlined" fullWidth />
              </Grid>
            </Grid>
            <TextField label="Info" multiline rows={10} variant="outlined" />
            <Button variant="outlined">Submit now</Button>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d10470.50177352361!2d-74.00452702125833!3d40.711840953871416!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sru!2s!4v1681132624894!5m2!1sru!2s"
              style={{ border: "1px solid  black", borderRadius: "10px" }}
              height={"400px"}
              loading="lazy"
            ></iframe>
          </Stack>
        </Container>
        <Divider />
        <Footer />
      </div>
    </Stack>
  );
};

export default contact;
