// import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import { Grid } from "@mui/material";
import LandingPage from "./Home";

export default function Home() {
  return (
    <>
      {/* ----- NavBar ----- */}
      <Navbar />

      {/* ----- Application ----- */}
      <LandingPage />

      {/* ----- Footer ----- */}
      {/* <Footer /> */}
    </>
  );
}
