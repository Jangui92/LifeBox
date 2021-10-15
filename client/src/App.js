import Profile from './pages/Profile'
import Mission from './pages/Mission'
import CoinitPage from './pages/CoinitPage'
import NavBar from './components/NavBar'
import LyfeBox from './pages/LyfeBox'
import React from 'react'
import './styles/App.css'
import { Route, Switch } from 'react-router-dom'

function App() {
  return (
    <div className="app">
      <NavBar />
      <Switch>
        <Route exact path="/" component={LyfeBox} />
        <Route path="/Mission" component={Mission} />
        <Route path="/Profile" component={Profile} />
        <Route path="/CoinitPage" component={CoinitPage} />
      </Switch>
    </div>
  )
}

export default App
