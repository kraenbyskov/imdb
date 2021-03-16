import React, { useEffect, useState } from "react";
import {Link} from "react-router-dom"


function Search() {

    const [state, setstate] = useState();
    const [Result, setResult] = useState("")
    console.log(state)

    const Key = `7c105b21789fdf773ab798b1c284f40e`
    const url =
        `https://api.themoviedb.org/3/search/movie?api_key=${Key}&language=en-US&query=${Result}&page=1&include_adult=false`;
    useEffect(() => {
        fetch(url)
            .then(response => response.json())
            .then(result => setstate(result.results))
            .catch((err) => {
                console.error(err);
            });
    }, [url]);

    return (
        <>
        <input type="text"  onChange={(event) => setResult(event.target.value)} />
            {state && state.map(({ poster_path, id }) => (
                <Link to={`/Movie/${id}`} style={{ width: "150px", display: "inline-flex", margin: "10px" }}>
                    <div>
                        <img style={{ width: "150px" }} src={`https://image.tmdb.org/t/p/original/${poster_path}`} alt="" />
                    </div>
                </Link>
            ))}
        </>
    );
}
export default Search;