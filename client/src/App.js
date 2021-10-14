import Profile from './pages/Profile'
import Mission from './pages/Mission'
import GratefulPage from './pages/GratefulPage'
import CoinitPage from './pages/CoinitPage'
import TipsForm from './components/TipsForm'
import NavBar from './components/NavBar'
import LyfeBox from './pages/LyfeBox'
import React from 'react'
import './styles/App.css'

function App() {
  return (
    <div>
      <NavBar />
      <LyfeBox />
      <Mission />
      <Profile />
      <GratefulPage />
      <CoinitPage />
      <TipsForm />
    </div>
  )
}

export default App
