import React from "react";
import ImageSlider from "../ImageSlider/ImageSlider";
import Movies from "../Movies/Movies";
import Viewers from "../Viewers/Viewers";

import { Container } from "./styles";

const Home = () => {
  return (
    <Container>
      <ImageSlider />
      <Viewers />
      <Movies />
    </Container>
  );
};

export default Home;
