import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import styled from "styled-components";
import FileNotFound from "../assets/image-not-found.jpg";
import PersonsMovieCredit from "./PersonsMovieCredit";

const Container = styled.div`
  max-width: 1000px;
  margin: 0 auto;
`;

export default function KeyWordsGetMovie() {
  let { id } = useParams();
  console.log(id);

  const [state, setstate] = useState();
  const Key = `7c105b21789fdf773ab798b1c284f40e`;
  const url = `https://api.themoviedb.org/3/person/${id}?api_key=${Key}&language=en-US`;
  useEffect(() => {
    fetch(url)
      .then((response) => response.json())
      .then((result) => setstate(result))
      .catch((err) => {
        console.error(err);
      });
  }, [url]);

  return (
    <Container>
      {state && (
        <>
          <h2>{state.name}</h2>
          <img
            src={
              state.profile_path
                ? "https://image.tmdb.org/t/p/original/" + state.profile_path
                : FileNotFound
            }
            alt={state.name}
            style={{ width: "100px" }}
          />
          <p>Born : {state.place_of_birth}</p>
          <p>Age : {state.birthday}</p>
          <p>{state.biography}</p>

          <PersonsMovieCredit id={state.id} />
        </>
      )}
    </Container>
  );
}
