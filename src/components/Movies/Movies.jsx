import React from "react";
import { Link } from "react-router-dom";
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
                <Link to={`/detail/${movie.id}`}>
                  <img src={movie.cardImg} alt="card" />
                </Link>
              </Wrap>
            );
          })}
      </Content>
    </Container>
  );
};

export default Movies;
