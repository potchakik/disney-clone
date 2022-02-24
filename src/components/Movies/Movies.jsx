import React from "react";
import { Container, Content, Wrap } from "./style";
import { selectMovies } from "../../features/movie/movieSlice";
import { useSelector } from "react-redux";

const Movies = () => {
  const movies = useSelector(selectMovies);
  return (
    <Container>
      <h4>Recommended for You</h4>
      <Content>
        {movies &&
          movies.map((movie) => {
            return (
              <Wrap key={movie.id}>
                <img src={movie.cardImg} alt="card" />
              </Wrap>
            );
          })}
      </Content>
    </Container>
  );
};

export default Movies;
