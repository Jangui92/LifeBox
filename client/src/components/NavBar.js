import React from 'react'
import { nav } from 'react-bootstrap'

export default function Navigation() {
  return (
    // <header>
    //   <NavLink to="/lyfebox">Begin</NavLink>
    //   <NavLink to="/profile">Profile</NavLink>
    //   <NavLink to="/mission">Our Mission</NavLink>
    //   <NavLink to="/GratefulPage">Grateful Page</NavLink>
    //   <NavLink to="/CoinitPage">Coin it</NavLink>
    // </header>
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <div class="container-fluid">
        <a class="navbar-brand" href="#">
          LyfeBox
        </a>
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavAltMarkup"
          aria-controls="navbarNavAltMarkup"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div class="navbar-nav">
            <a class="nav-link active" aria-current="page" href="/mission">
              Our Mission
            </a>
            <a class="nav-link" href="/profile">
              Profile
            </a>
            <a class="nav-link" href="/gratefulpage">
              Grateful
            </a>
            <a class="nav-link" href="/coinitpage">
              Coin It
            </a>
          </div>
        </div>
      </div>
    </nav>
  )
}
