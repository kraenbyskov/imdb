import React, { useEffect, useState } from "react";
import { Link, useHistory } from "react-router-dom";
import styled from "styled-components";
import FileNotFound from "../assets/image-not-found.jpg";

const SearchContainer = styled.div`
  position: relative;
  z-index: 100000;
`;

const Input = styled.input`
  background-color: transparent;
  border: 0px solid white;
  border-bottom: 2px solid white;
  padding: 4px 8px;
  color: white;

  &:focus {
    outline: none;
  }

  &::placeholder {
    color: white;
  }
`;

const Card = styled(Link)`
  display: inline-flex;
  align-items: center;
  padding: 4px 8px;
  background: white;
  width: 200px;
  margin-bottom: 2px;
  color: black;
  text-decoration: none;
`;

const SearchResults = styled.div`
  position: absolute;
  top: 30px;
  left: 0;
`;

const Image = styled.img`
  width: 30px;
  padding-right: 8px;
`;

function Search() {
  const Imageurl = "https://image.tmdb.org/t/p/original/";
  const [state, setstate] = useState();
  const [Result, setResult] = useState("");
  const history = useHistory();

  const Key = `7c105b21789fdf773ab798b1c284f40e`;
  const url = `https://api.themoviedb.org/3/search/movie?api_key=${Key}&language=en-US&query=${Result}&page=1&include_adult=false`;
  useEffect(() => {
    fetch(url)
      .then((response) => response.json())
      .then((result) => setstate(result.results))
      .catch((err) => {
        console.error(err);
      });
  }, [url]);

  const LinkToMovie = (id) => {
    history.push(`/Movie/${id}`);
    setResult("");
  };

  return (
    <SearchContainer>
      <Input
        type="text"
        value={Result}
        placeholder="Search"
        onChange={(event) => setResult(event.target.value)}
      />
      <SearchResults>
        {state &&
          state.map((item) => (
            <Card onClick={() => LinkToMovie(item.id)}>
              <Image
                src={
                  item.poster_path ? Imageurl + item.poster_path : FileNotFound
                }
                alt=""
              />
              {item.title}
            </Card>
          ))}
      </SearchResults>
    </SearchContainer>
  );
}
export default Search;
