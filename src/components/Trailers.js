import React, { useEffect, useState } from "react";
import styled from "styled-components";
import FileNotFound from "../assets/image-not-found.jpg";
import { Link } from "react-router-dom";

const Card = styled(Link)`
  background: white;
  margin: 10px;
  padding: 10px;
  text-align: center;
`;

export default function Trailers({ id }) {
  const [state, setstate] = useState();

  const Key = `7c105b21789fdf773ab798b1c284f40e`;
  const url = `https://api.themoviedb.org/3/movie/${id}/videos?api_key=${Key}&language=en-US`;
  useEffect(() => {
    fetch(url)
      .then((response) => response.json())
      .then((result) => setstate(result.results))
      .catch((err) => {
        console.error(err);
      });
  }, [url]);
  console.log(state);
  return (
    <div>
      {state &&
        state
          .slice(0, 2)
          .map((item) => (
            <iframe
              width="560"
              height="315"
              src={`https://www.youtube.com/embed/${item.key}`}
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen
            ></iframe>
          ))}
    </div>
  );
}
