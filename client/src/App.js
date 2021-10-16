import Profile from './pages/Profile'
import Mission from './pages/Mission'
import NavBar from './components/NavBar'
import LyfeBox from './pages/LyfeBox'
import React, { useState } from 'react'
import './styles/App.css'
import { Route, Switch } from 'react-router-dom'

function App() {
  const [saveTip, setSaveTip] = useState('')
  return (
    <div className="app">
      <NavBar />
      <Switch>
        <Route exact path="/" component={LyfeBox} />
        <Route path="/Mission" component={Mission} />
        <Route
          path="/Profile"
          component={() => (
            <Profile saveTip={saveTip} setSaveTip={setSaveTip} />
          )}
        />
      </Switch>
    </div>
  )
}

export default App
