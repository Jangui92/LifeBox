import Profile from './pages/Profile'
import Mission from './pages/Mission'
import GratefulPage from './pages/GratefulPage'
import CoinitPage from './pages/CoinitPage'
import TipsForm from './components/TipsForm'
import NavBar from './components/NavBar'
import React from 'react'
import './styles/App.css'

function App() {
  return (
    <div>
      <NavBar />
      <Mission />
      <Profile />
      <GratefulPage />
      <CoinitPage />
      <TipsForm />
    </div>
  )
}

export default App
