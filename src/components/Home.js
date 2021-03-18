import React, { useEffect, useState } from "react";
import BannerSlider from "./BannerSlider";
import styled from "styled-components";
import PosterImage from "./PosterImage";
import ContainerComponent from "./Container";

const MovieNavBar = styled.div`
  width: 100%;
  height: 60px;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  div {
    color: black;
    cursor: pointer;

    &:hover {
      color: #e4bb23;
    }
  }
`;

const PosterContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;
`;

const MovieButtons = ({ setMedia }) => {
  return (
    <MovieNavBar>
      <div onClick={() => setMedia("all")}>Alle</div>
      <div onClick={() => setMedia("movie")}>Film</div>
      <div onClick={() => setMedia("tv")}>Tv og Serier</div>
    </MovieNavBar>
  );
};

function Home() {
  const [state, setstate] = useState();
  const [Media, setMedia] = useState("all");
  const [rating, setRating] = useState(5);
  const [sortetData, setSortetData] = useState();

  const Key = `7c105b21789fdf773ab798b1c284f40e`;
  const Time = "week";
  const url = `https://api.themoviedb.org/3/trending/${Media}/${Time}?api_key=${Key}`;
  useEffect(() => {
    fetch(url)
      .then((response) => response.json())
      .then((result) => setstate(result.results))
      .catch((err) => {
        console.error(err);
      });
  }, [url]);

  const SortByRating = (rating, data) => {
    const elements = data;

    const items = [];

    for (const [index, value] of elements.entries()) {
      if (value.vote_average <= rating) {
        items.push(value);
      }
    }
    setSortetData(items);
    setRating(parseInt(rating));
  };

  return (
    <>
      <BannerSlider data={state} />
      <ContainerComponent>
        <MovieButtons setMedia={setMedia} />
        <input
          style={{ width: "100%" }}
          type="range"
          min="1"
          max="10"
          value={rating}
          onChange={(input) => SortByRating(input.target.value, state)}
        ></input>
        <PosterContainer>
          {sortetData
            ? sortetData.map((item) => (
                <PosterImage key={item.id} data={item} />
              ))
            : state &&
              state.map((item) => <PosterImage key={item.id} data={item} />)}
        </PosterContainer>
      </ContainerComponent>
    </>
  );
}
export default Home;
