import React from "react";
import Slider from "infinite-react-carousel";
import styled from "styled-components";

const imageUrl = "https://image.tmdb.org/t/p/original/";

const Banner = styled.div`
  width: 100%;
  height: 600px;
  position: relative;
  top: 0;
  left: 0;
  color: white;
`;

const BannerImage = styled(Banner)`
  position: absolute;
  background-image: url("${imageUrl}${(props) => props.image}");
  background-size: cover;
  background-position: center;
`;

const BannerOverlay = styled(Banner)`
  position: absolute;
  z-index: 100;
  ${(props) => props.children}
  background: linear-gradient(
    180deg,
    rgba(11, 11, 11, 1) 0%,
    rgba(29, 27, 27, 0) 100%
  );
`;

const BannerContainer = styled(Banner)`
  position: relative;
  z-index: 200;
  display: flex;
  align-items: center;
  margin: 0 auto;
  max-width: 1000px;
`;

const PosterImage = styled.img`
  width: 100px;
`;

export default function BannerSlider({ data }) {
  return (
    <div>
      {data && (
        <Slider autoplay={true} autoplaySpeed={5000} pauseOnHover={true} dots>
          {data
            .slice(0, 5)
            .map(
              ({
                title,
                backdrop_path,
                poster_path,
                name,
                vote_average,
                release_date,
                id,
              }) => (
                <Banner key={id}>
                  <BannerOverlay />
                  <BannerImage image={backdrop_path} />
                  <BannerContainer>
                    <div>
                      <PosterImage src={imageUrl + poster_path} />
                      <h3>{title ? title : name}</h3>
                      <h4>Rating {vote_average}</h4>
                      <h4>Release date {release_date}</h4>
                    </div>
                  </BannerContainer>
                </Banner>
              )
            )}
        </Slider>
      )}
    </div>
  );
}
