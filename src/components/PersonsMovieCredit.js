import React, { useEffect, useState } from "react";
import styled from "styled-components";
import FileNotFound from "../assets/image-not-found.jpg";
import { Link } from "react-router-dom";

const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  gap: 10px;
  width: 600px;
`;

export default function PersonsMovieCredit({ id }) {
  const [state, setstate] = useState();
  const Key = `7c105b21789fdf773ab798b1c284f40e`;
  const url = `https://api.themoviedb.org/3/person/${id}/movie_credits?api_key=${Key}&language=en-US`;
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
      {state &&
        state.cast.map((item) => (
          <Link to={`/movie/${item.id}`}>
            {console.log(item)}
            <img
              src={
                item.poster_path
                  ? "https://image.tmdb.org/t/p/original/" + item.poster_path
                  : FileNotFound
              }
              alt={item.name}
              style={{ width: "100%" }}
            />
          </Link>
        ))}
    </Container>
  );
}
