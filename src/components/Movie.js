import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom"
import Credit from "./Credit"
import PosterImage from "./PosterImage";


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

    console.log(state)

    return (
        <div>
            <h1>Movie</h1>
            { state && 
                <div>
                    <h3>{state.original_title}</h3>
                    <p>{state.overview}</p>
                    <PosterImage   image={state.poster_path}/>

                    <ul>
                    {state.production_companies.map(({name, logo_path}) => (
                        <li>{name}
        
                        <PosterImage image={logo_path} />

                        </li>
                        ))}
                    </ul>

                    <Credit id={id} />
                            
                </div>
            }
        </div>
    );
}
export default Movie;