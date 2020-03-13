import React from "react";
import ListCards from "./components/ListCards/ListCards";
import Footer from "../../components/Footer/Footer";
import Hero from "../../components/HeroSection/Hero";
import HowItWork from "./components/HowItWork/HowItWork";
import HomeHeader from "../../components/HomeHeader/HomeHeader";
const Home = () => {
  return (
    <div className="bg-white">
      <HomeHeader />
      <Hero />
      <ListCards />
      <HowItWork />
      <Footer />
    </div>
  );
};

export default Home;
