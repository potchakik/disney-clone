import React from "react";
import {
  SubTitle,
  Controls,
  ImgTitle,
  Container,
  AddButton,
  Background,
  PlayButton,
  Description,
  TrailerButton,
  GroupWatchButton,
} from "./style";

const style = () => {
  return (
    <Container>
      <Background>
        <img src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse3.mm.bing.net%2Fth%3Fid%3DOIP.7gAE7LptUycxYmScGs6LdQHaEK%26pid%3DApi&f=1" />
      </Background>
      <ImgTitle>
        <img src="" />
      </ImgTitle>
      <Controls>
        <PlayButton>
          <img src="/images/play-icon-black.png" />
          <span>PLAY</span>
        </PlayButton>
        <TrailerButton>
          <img src="/images/play-icon-white.png" />
          <span>Trailer</span>
        </TrailerButton>
        <AddButton>
          <span>+</span>
        </AddButton>
        <GroupWatchButton>
          <img src="/images/group-icon.png" />
        </GroupWatchButton>
      </Controls>
      <SubTitle>2018 : 7m : Family, Fantasy, Kids, Animation</SubTitle>
      <Description>
        A Chinese mom who's sad when her grown son leave's.
      </Description>
    </Container>
  );
};

export default style;
