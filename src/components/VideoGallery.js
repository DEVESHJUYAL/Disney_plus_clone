import React, { useState } from "react";
import styled from "styled-components";

function VideoGallery() {
  const [activeVideo, setActiveVideo] = useState(null);

  const handleMouseEnter = (videoName) => {
    setActiveVideo(videoName);
  };

  const handleMouseLeave = () => {
    setActiveVideo(null);
  };

  const videoData = [
    {
      name: "disney",
      src: "/videos/1564674844-disney.mp4",
      imageSrc: "/images/viewers-disney.png",
    },
    {
      name: "pixar",
      src: "/videos/1564676714-pixar.mp4",
      imageSrc: "/images/viewers-pixar.png",
    },
    {
      name: "marvel",
      src: "/videos/1564676115-marvel.mp4",
      imageSrc: "/images/viewers-marvel.png",
    },
    {
      name: "starwars",
      src: "/videos/1608229455-star-wars.mp4",
      imageSrc: "/images/viewers-starwars.png",
    },
    {
      name: "national",
      src: "/videos/1564676296-national-geographic.mp4",
      imageSrc: "/images/viewers-national.png",
    },
  ];

  return (
    <GalleryContainer>
      {videoData.map((video) => (
        <Thumbnail
          key={video.name}
          onMouseEnter={() => handleMouseEnter(video.name)}
          onMouseLeave={handleMouseLeave}
        >
          {activeVideo === video.name ? (
            <StyledVideo autoPlay loop muted>
              <source src={video.src} type="video/mp4" />
            </StyledVideo>
          ) : (
            <img src={video.imageSrc} alt={video.name} />
          )}
        </Thumbnail>
      ))}
    </GalleryContainer>
  );
}

export default VideoGallery;

const GalleryContainer = styled.div`
  margin-top: 30px;
  display: grid;
  padding: 30px 0px 26px;
  grid-gap: 25px;
  grid-template-columns: repeat(5, minmax(0, 1fr));
`;

const Thumbnail = styled.div`
  position: relative;
  border-radius: 10px;
  cursor: pointer;
  border: 3px solid rgba(249, 249, 249, 0.1);
  box-shadow: rgb(0 0 0 / 69%) 0px 26px 30px -10px,
    rgb(0 0 0 / 73%) 0px 16px 10px -10px;
  transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  &:hover {
    box-shadow: rgb(0 0 0 / 80%) 0px 40px 58px -16px;
    transform: scale(1.05);
    border-color: rgb(249, 249, 249, 0.6);
  }
`;

const StyledVideo = styled.video`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  z-index: -1;
`;
