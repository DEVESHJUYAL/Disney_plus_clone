import React, { useEffect } from "react";
import styled from "styled-components";
import FilmLists from "./FilmLists";
import db from "../firebase";
import { useDispatch } from "react-redux";
import { setMovies } from "../features/movie/movieSlice";
import ImageCarousel from "./ImageCarousel";
import VideoGallery from "./VideoGallery";

function HomePage() {
  const dispatch = useDispatch();

  useEffect(() => {
    const unsubscribe = db.collection("movies").onSnapshot((snapshot) => {
      let movieArray = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      dispatch(setMovies(movieArray));
    });

    return () => unsubscribe();
  }, [dispatch]);

  return (
    <MainContainer>
      <ImageCarousel />
      <VideoGallery />
      <FilmLists />
    </MainContainer>
  );
}

export default HomePage;

const MainContainer = styled.main`
  min-height: calc(100vh - 70px);
  padding: 0 calc(3.5vw + 5px);
  padding-left: 100px;
  position: relative;
  overflow-x: hidden;
  padding-bottom: 20px;

  &:before {
    background: url("/images/home-background.png") center center / cover
      no-repeat fixed;
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: -1;
  }
`;
