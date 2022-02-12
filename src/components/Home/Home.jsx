import React from "react";
import ImageSlider from "../ImageSlider/ImageSlider";
import Viewers from "../Viewers/Viewers";

import { Container } from "./styles";

const Home = () => {
  return (
    <Container>
      <ImageSlider />
      <Viewers />
    </Container>
  );
};

export default Home;
