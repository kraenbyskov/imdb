import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
const KeywordsContainer = styled.div`
  height: auto;
  display: block;
`;

const Keys = styled(Link)`
  display: inline-block;
  background: lightgray;
  padding: 5px 10px;
  margin: 5px;
  color: black;
  text-decoration: none;
`;

export default function Keywords({ id }) {
  const [state, setstate] = useState();
  const Key = `7c105b21789fdf773ab798b1c284f40e`;
  const url = `https://api.themoviedb.org/3/movie/${id}/keywords?api_key=${Key}`;
  useEffect(() => {
    fetch(url)
      .then((response) => response.json())
      .then((result) => setstate(result.keywords))
      .catch((err) => {
        console.error(err);
      });
  }, [url]);
  return (
    <KeywordsContainer>
      {state &&
        state.map(({ name, id }) => <Keys to={`/Keywords/${id}`}>{name}</Keys>)}
    </KeywordsContainer>
  );
}
