import Profile from './pages/Profile'
import Mission from './pages/Mission'
import GratefulPage from './pages/GratefulPage'
import CoinitPage from './pages/CoinitPage'
import TipsForm from './components/TipsForm'
import NavBar from './components/NavBar'
import LyfeBox from './pages/LyfeBox'
import React from 'react'
import './styles/App.css'
import { NavBar } from 'react-bootstrap'
import Route from 'react-router-dom'
function App() {
  return (
    <div>
      <NavBar> </NavBar>
      <main>
        <Route path="/" component={LyfeBox} />
        <Route path="/mission" component={Mission} />
        <Route path="/profile" component={Profile} />
        <Route path="/gratefulpage" component={GratefulPage} />
        <Route path="/coinitpage" component={CoinitPage} />
        <Route path="/tipsform" component={TipsForm} />
      </main>
    </div>
  )
}

export default App
