import React, { useEffect, useState } from "react";
import PosterImage from "./PosterImage";

export default function Credit({id}) {

    const [state, setstate] = useState();
    const [SeMere, setSeMere] = useState(5);



    const Key = `7c105b21789fdf773ab798b1c284f40e`
    const url =
        `https://api.themoviedb.org/3/movie/${id}/credits?api_key=${Key}&language=en-US`;
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
          <h1>Credit</h1>  
          <div style={{display:"flex"}}>
          {state && state.cast.slice(0,SeMere).map((item) => (
             <div key={item.id}>
                 <h4>{item.character}</h4>
                 <h3>{item.name}</h3>

                 <PosterImage  image={item.profile_path}/>

              </div>
          ))}
          </div>
          <button onClick={() => setSeMere(SeMere === 5 ? state.cast.length : 5 )}>Se mere</button>
        </div>
    )
}
