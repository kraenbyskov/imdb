import React from 'react'
import {Link} from "react-router-dom"

export default function Navbar() {
    return (
        <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/Search">Search</Link>
          </li>
        </ul>
      </nav>
    )
}