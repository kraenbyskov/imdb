import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Credit from "./Credit";
import styled from "styled-components";
import FileNotFound from "../assets/image-not-found.jpg";
import Keywords from "./Keywords";
import Trailers from "./Trailers";
const Imageurl = "https://image.tmdb.org/t/p/original/";

const Container = styled.div`
  max-width: 1000px;
  margin: 0 auto;
`;

const Banner = styled.div`
  width: 100%;
  height: 400px;
  position: relative;
  top: 0;
  left: 0;
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

const BannerImage = styled(Banner)`
  position: absolute;
  background-size: cover;
  background-position: top;
  background-image: url(${Imageurl}${(props) => props.src});
`;

function Movie() {
  let { id } = useParams();

  const [state, setstate] = useState();
  const Key = `7c105b21789fdf773ab798b1c284f40e`;
  const url = `https://api.themoviedb.org/3/movie/${id}?api_key=${Key}&language=en-US`;
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
    <div>
      {state && (
        <>
          <Banner>
            <BannerOverlay />
            <BannerImage src={state.backdrop_path} />
          </Banner>
          <Container>
            <div>
              <h3>{state.original_title}</h3>
              <p>{state.overview}</p>
              <img
                src={
                  state.poster_path
                    ? "https://image.tmdb.org/t/p/original/" + state.poster_path
                    : FileNotFound
                }
                style={{ width: "300px" }}
                alt={state.name}
              />

              <ul>
                {state.production_companies.map(({ name, logo_path }) => (
                  <li>{name}</li>
                ))}
              </ul>
              <Keywords id={id} />
              <Trailers id={id} />

              <Credit id={id} />
            </div>
          </Container>
        </>
      )}
    </div>
  );
}
export default Movie;
