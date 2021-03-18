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

export default function Credit({ id }) {
  const [state, setstate] = useState();
  const [SeMere, setSeMere] = useState(5);

  const Key = `7c105b21789fdf773ab798b1c284f40e`;
  const url = `https://api.themoviedb.org/3/movie/${id}/credits?api_key=${Key}&language=en-US`;
  useEffect(() => {
    fetch(url)
      .then((response) => response.json())
      .then((result) => setstate(result))
      .catch((err) => {
        console.error(err);
      });
  }, [url]);
  return (
    <div>
      <h1>Credit</h1>
      <div style={{ display: "flex" }}>
        {state &&
          state.cast.slice(0, SeMere).map((item) => (
            <Card to={`/persons/${item.id}`} key={item.id}>
              <h4>{item.character}</h4>
              <h3>{item.name}</h3>
              <img
                src={
                  item.profile_path
                    ? "https://image.tmdb.org/t/p/original/" + item.profile_path
                    : FileNotFound
                }
                alt={item.name}
                style={{ width: "100px" }}
              />
            </Card>
          ))}
      </div>
      <button onClick={() => setSeMere(SeMere === 5 ? state.cast.length : 5)}>
        Se mere
      </button>
    </div>
  );
}
