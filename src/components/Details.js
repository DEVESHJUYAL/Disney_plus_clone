import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { useParams } from "react-router-dom";
import db from "../firebase";
import { Fade } from "react-reveal";

function Details() {
  const { id } = useParams();
  const [film, setFilm] = useState([]);
  useEffect(() => {
    const fetchFilm = async () => {
      try {
        const doc = await db.collection("movies").doc(id).get();
        if (doc.exists) {
          setFilm(doc.data());
        } else {
          console.log("No such document!");
        }
      } catch (error) {
        console.error("Error fetching document:", error);
      }
    };

    fetchFilm();
  }, [id]);

  return (
    <Wrapper>
      {film && (
        <>
          <Backdrop>
            <img src={film.backgroundImg} alt="Background" />
          </Backdrop>
          <Fade right>
            <TitleImage>
              <img src={film.titleImg} alt="Title" />
            </TitleImage>
            <SubtitleText>{film.subTitle}</SubtitleText>
            <ButtonGroup>
              <WatchButton>
                <img src="/images/play-icon-black.png" alt="Play" />
                <span>WATCH</span>
              </WatchButton>
              <PreviewButton>
                <img src="/images/play-icon-white.png" alt="Trailer" />
                <span>TRAILER</span>
              </PreviewButton>
              <FavoriteButton>
                <span>+</span>
              </FavoriteButton>
              <GroupViewButton>
                <img src="/images/group-icon.png" alt="Group Watch" />
              </GroupViewButton>
            </ButtonGroup>
            <DescriptionText>{film.description}</DescriptionText>
          </Fade>
        </>
      )}
    </Wrapper>
  );
}

export default Details;

const Wrapper = styled.div`
  height: 100vh;
  padding-left: 100px;
  position: relative;
`;

const Backdrop = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  z-index: -1;
  opacity: 0.6;

  img {
    width: 100vw;
    height: 100vh;
    object-fit: cover;
  }
`;

const TitleImage = styled.div`
  height: 30vh;
  width: 35vw;
  min-height: 150px;
  min-width: 180px;
  padding-top: 60px;

  img {
    width: 100%;
    height: 100%;
    object-fit: contain;
  }
`;

const ButtonGroup = styled.div`
  display: flex;
  align-items: center;
  margin-top: 20px;
`;

const WatchButton = styled.button`
  border-radius: 5px;
  font-size: 16px;
  padding: 0 24px;
  margin-right: 20px;
  display: flex;
  align-items: center;
  height: 55px;
  background: rgb(250, 250, 250);
  border: none;
  letter-spacing: 1.5px;
  cursor: pointer;

  &:hover {
    background: rgb(200, 200, 200);
  }
`;

const PreviewButton = styled(WatchButton)`
  background: rgba(0, 0, 0, 0.25);
  border: 1px solid rgb(250, 250, 250);
  color: rgb(250, 250, 250);
  text-transform: uppercase;
`;

const FavoriteButton = styled.button`
  margin-right: 18px;
  width: 44px;
  height: 44px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  border: 2px solid white;
  background-color: rgba(0, 0, 0, 0.65);
  cursor: pointer;

  span {
    font-size: 30px;
    color: white;
  }
`;

const GroupViewButton = styled(FavoriteButton)`
  background-color: rgb(0, 0, 0);
`;

const SubtitleText = styled.div`
  color: rgb(250, 250, 250);
  font-size: 15px;
  min-height: 20px;
  margin-top: 26px;
`;

const DescriptionText = styled.div`
  line-height: 1.5;
  font-size: 20px;
  margin-top: 16px;
  color: rgb(250, 250, 250);
  max-width: 500px;
  text-align: justify;
`;
