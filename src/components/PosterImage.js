import React, { useEffect, useState } from "react";
import FileNotFound from "../assets/image-not-found.jpg";
import styled from "styled-components";
import { Link } from "react-router-dom";

const Card = styled(Link)`
  width: 100%;
  color: black;
  text-decoration: none;
`;

const Image = styled.img`
  width: 100%;
`;

const GenreContainer = styled.div`
  display: flex;
  width: 100%;
`;

const GenreText = styled.p`
  font-size: 12px;
  padding-right: 10px;
`;

const Genre = ({ ids, genre }) => {
  return (
    <>
      {genre &&
        genre.genres.map(({ name, id }) => (
          <span key={id}>
            {id === ids ? <GenreText>{name}</GenreText> : null}
          </span>
        ))}
    </>
  );
};

export default function PosterImage({ data }) {
  const Imageurl = "https://image.tmdb.org/t/p/original/";

  const [genre, setGenre] = useState();

  const Key = `7c105b21789fdf773ab798b1c284f40e`;
  const url = `https://api.themoviedb.org/3/genre/movie/list?api_key=${Key}&language=en-US`;
  useEffect(() => {
    fetch(url)
      .then((response) => response.json())
      .then((result) => setGenre(result))
      .catch((err) => {
        console.error(err);
      });
  }, [url]);

  return (
    <Card to={`/Movie/${data.id}`}>
      <Image src={data ? Imageurl + data.poster_path : FileNotFound} />
      <h3>{data.original_title ? data.original_title : data.original_name}</h3>
      <GenreContainer>
        {data.genre_ids.map((id) => (
          <Genre key={id} ids={id} genre={genre} />
        ))}
      </GenreContainer>
      <p>{data.vote_average}</p>
    </Card>
  );
}
