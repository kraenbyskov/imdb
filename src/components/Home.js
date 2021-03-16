import React, { useEffect, useState } from "react";

function Home() {

    const [state, setstate] = useState();
    const [Media, setMedia] = useState("all")


    const Key = `7c105b21789fdf773ab798b1c284f40e`
    const Time = "week"
    const url =
        `https://api.themoviedb.org/3/trending/${Media}/${Time}?api_key=${Key}`;
    useEffect(() => {
        fetch(url)
            .then(response => response.json())
            .then(result => setstate(result.results))
            .catch((err) => {
                console.error(err);
            });
    }, [url]);
    console.log(state)

    return (
        <>
        <div>
            <button onClick={() => setMedia("all")}>All</button>
            <button onClick={() => setMedia("movie")}>Movie</button>
            <button onClick={() => setMedia("tv")}>TV</button>
        </div>

            {state && state.map(({ poster_path }) => (
                <div style={{ width: "150px", display: "inline-flex", margin: "10px" }}>
                    <div>
                        <img style={{ width: "150px" }} src={`https://image.tmdb.org/t/p/original/${poster_path}`} alt="" />
                    </div>
                </div>
            ))}
        </>
    );
}
export default Home;