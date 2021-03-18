import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import styled from "styled-components";
import PosterImage from "./PosterImage";

const Container = styled.div`
  max-width: 1000px;
  margin: 0 auto;
`;

const PosterContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;
`;

export default function KeyWordsGetMovie() {
  let { id } = useParams();
  console.log(id);

  const [state, setstate] = useState();
  const Key = `7c105b21789fdf773ab798b1c284f40e`;
  const url = `https://api.themoviedb.org/3/keyword/${id}/movies?api_key=${Key}&language=en-US&include_adult=false`;
  useEffect(() => {
    fetch(url)
      .then((response) => response.json())
      .then((result) => setstate(result))
      .catch((err) => {
        console.error(err);
      });
  }, [url]);
  console.log(state);

  return (
    <Container>
      <PosterContainer>
        {state && state.results.map((item) => <PosterImage data={item} />)}
      </PosterContainer>
    </Container>
  );
}
