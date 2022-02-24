import React, { useEffect, useState } from "react";
import {
  SubTitle,
  Controls,
  ImgTitle,
  Container,
  AddButton,
  Background,
  PlayButton,
  ImageTitle,
  Description,
  TrailerButton,
  GroupWatchButton,
} from "./style";

import { useParams } from "react-router-dom";
import { db } from "../../firebase";
import { doc, getDoc, onSnapshot } from "firebase/firestore";

const Detail = () => {
  const { id } = useParams();
  const [movie, setMovie] = useState();

  useEffect(() => {
    const unsub = onSnapshot(doc(db, "movies", id), (doc) => {
      setMovie(doc.data());
    });
  }, []);

  return (
    <Container>
      {movie && (
        <>
          <Background>
            <img alt="" src={movie.backgroundImg} />
          </Background>
          <ImageTitle>
            <img alt="" src={movie.titleImg} />
          </ImageTitle>
          <Controls>
            <PlayButton>
              <img alt="" src="/images/play-icon-black.png" />
              <span>PLAY</span>
            </PlayButton>

            <TrailerButton>
              <img alt="" src="/images/play-icon-white.png" />
              <span>TRAILER</span>
            </TrailerButton>

            <AddButton>
              <span>+</span>
            </AddButton>

            <GroupWatchButton>
              <img alt="" src="/images/group-icon.png" />
            </GroupWatchButton>
          </Controls>
          <SubTitle>{movie.subTitle}</SubTitle>
          <Description>{movie.description}</Description>
        </>
      )}
    </Container>
  );
};

export default Detail;
