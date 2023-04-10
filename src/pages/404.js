import Footer from "@/components/Footer";
import Header from "@/components/Header";
import { Container } from "@mui/material";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";

const Error = () => {
  const router = useRouter();
  const [time, setTime] = useState(5);

  useEffect(() => {
    setTimeout(() => {
      router.push("/");
    }, 5000);
  }, []);

  setInterval(() => {
    setTime(time - 1);
  }, 1000);

  return (
    <>
      <Header color={"black"} />
      <Container>
        <div className="flex flex-col items-center justify-center min-h-screen space-y-5">
          <img src="/error.png" alt="error" className="w-1/6" />
          <h1 className="text-4xl">Something went wrong</h1>
          <h3>You are backing to home page in {time} seconds</h3>
        </div>
      </Container>
      <Footer />
    </>
  );
};

export default Error;
