import React from 'react'
import { NavLink } from 'react-router-dom'

export default function Navigation() {
  return (
    <header>
      <NavLink to="/lyfebox">Begin</NavLink>
      <NavLink to="/profile">Profile</NavLink>
      <NavLink to="/mission">Our Mission</NavLink>
      <NavLink to="/GratefulPage">Grateful Page</NavLink>
      <NavLink to="/CoinitPage">Coin it</NavLink>
    </header>
  )
}
