import React from 'react'
import Image from "../assets/image-not-found.jpg"



export default function PosterImage({image}) {
    const url = "https://image.tmdb.org/t/p/original/"

    return (
        <img style={{ width: "350px" }} src={image ? url + image : Image} alt="" />
    )
}
