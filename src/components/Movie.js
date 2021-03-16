import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom"


function Movie() {
    let { id } = useParams();

    const [state, setstate] = useState();
    const Key = `7c105b21789fdf773ab798b1c284f40e`
    const url =
        `https://api.themoviedb.org/3/movie/${id}?api_key=${Key}&language=en-US`;
    useEffect(() => {
        fetch(url)
            .then(response => response.json())
            .then(result => setstate(result))
            .catch((err) => {
                console.error(err);
            });
    }, [url]);

    return (
        <div>
            <h1>Movie</h1>
            { state && 
                <div>
                    <h3>{state.original_title}</h3>
                    <p>{state.overview}</p>
                    <img style={{ width: "150px" }} src={`https://image.tmdb.org/t/p/original/${state.poster_path}`} alt="" />

                    <ul>
                    {state.production_companies.map(({name, logo_path}) => (
                        <li>{name}
                        <img style={{ width: "150px" }} src={`https://image.tmdb.org/t/p/original/${logo_path}`} alt="" />
                        </li>
                        ))}
                    </ul>
                            
                </div>
            }
        </div>
    );
}
export default Movie;