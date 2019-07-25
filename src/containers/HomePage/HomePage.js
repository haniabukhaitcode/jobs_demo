import React from "react";
import Header from "./Header/Header";
import Advertisement from "./Advertisement/Advertisement";
import Enrollmenet from "./Enrollmenet/Enrollmenet";
import Footer from "./Footer/Footer";

const HomePage = () => {
  return (
    <React.Fragment>
      <Header />
      <Advertisement />
      <Enrollmenet />
      <Footer />
    </React.Fragment>
  );
};

export default HomePage;
