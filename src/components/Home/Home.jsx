import React, { useEffect } from "react";
import ImageSlider from "../ImageSlider/ImageSlider";
import Movies from "../Movies/Movies";
import Viewers from "../Viewers/Viewers";
import { Container } from "./styles";

import { collection, onSnapshot } from "firebase/firestore";
import { db } from "../../firebase";
import { useDispatch } from "react-redux";
import { setMovies } from "../../features/movie/movieSlice";

const Home = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    onSnapshot(collection(db, "movies"), (snapshot) => {
      let tempMovies = snapshot.docs.map((doc) => {
        // console.log(doc.data());

        return { id: doc.id, ...doc.data() };
      });
      //console.log(tempMovies);
      dispatch(setMovies(tempMovies));
    });
  }, []);

  return (
    <Container>
      <ImageSlider />
      <Viewers />
      <Movies />
    </Container>
  );
};

export default Home;
