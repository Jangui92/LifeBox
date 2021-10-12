import { useEffect, useState } from 'react'
import { Route, Switch } from 'react-router-dom'
import Profile from './pages/Profile'
import Mission from './pages/Mission'
import GratefulPage from './pages/GratefulPage'
import TipsForm from './components/TipsForm'
import NavBar from './components/JournaliesForm'
import GratefulForm from './components/GratefulForms'
import CommentsForm from './components/CommentsForm'
import CoinitForm from './components/CommentsForm'
import './styles/App.css'

function App() {
  const [authenticated, toggleAuthenticated] = useState(false)
  const [user, setUser] = useState(null)

  const checkToken = async () => {
    //If a token exists, sends token to localstorage to persist logged in user
    const session = await CheckSession()
    setUser(session)
    toggleAuthenticated(true)
  }
  // log out
  const handleLogOut = () => {
    //Reset all auth related state and clear localstorage
    setUser(null)
    toggleAuthenticated(false)
    localStorage.clear()
  }

  useEffect(() => {
    const token = localStorage.getItem('token')
    // Check if token exists before requesting to validate the token
    if (token) {
      checkToken()
    }
  }, [])

  return (
    <div className="App">
  <Switch>
    <Route path="/coinitform" component={CoinitForm} />
    <Route path="/commentsform" component={CommentsForm} />
    <Route path="/gratefulform" component={GratefulForm} />
    <Route path="/journaliesform" component={JournaliesForm} />
    <Route path="/navbar" component={NavBar} />
    <Route path="/tipsform" component={TipsForm} />
  </Switch>
    </div>
  )
}

export default 