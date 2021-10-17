import Journal from './pages/Journal'
import Mission from './pages/Mission'
import NavBar from './components/NavBar'
import LyfeBox from './pages/LyfeBox'
import React from 'react'
import './styles/App.css'
import { Route, Switch } from 'react-router-dom'

function App() {
  // const tipsData = [
  //   {
  //     content:
  //       'Breathe, everything takes time. Rome was not improved in a day.',
  //     date: 'October 15, 2021',
  //     createdAt: new Date(),
  //     updatedAt: new Date()
  //   },
  //   {
  //     content: 'Let it go. It is not worth your health.',
  //     date: 'October 16, 2021',
  //     createdAt: new Date(),
  //     updatedAt: new Date()
  //   },
  //   {
  //     content: 'Today is a new day. Take advantage of the clean slate.',
  //     date: 'October 17, 2021',
  //     createdAt: new Date(),
  //     updatedAt: new Date()
  //   },
  //   {
  //     content:
  //       'What if today you decide to just stop worrying. What would that look like?',
  //     date: 'October 18, 2021',
  //     createdAt: new Date(),
  //     updatedAt: new Date()
  //   },
  //   {
  //     content:
  //       'Celebrate every milestone, no matter how "small". In this, you teach yourself to stop abandoning your acheivements.',
  //     date: 'October 19, 2021',
  //     createdAt: new Date(),
  //     updatedAt: new Date()
  //   },
  //   {
  //     content:
  //       'Take today to give a friend a phone call and let them know that you are poud of them. You never know how much it would mean to them.',
  //     date: 'October 20, 2021',
  //     createdAt: new Date(),
  //     updatedAt: new Date()
  //   }
  // ]
  // const [tip, setTip] = useState(tipsData)
  // const postTip = (tip) => {
  //   setTip({ content: tip.content })

  return (
    <div className="app">
      <NavBar />
      <Switch>
        <Route exact path="/" component={LyfeBox} />
        <Route path="/Mission" component={Mission} />
        <Route path="/Journal" component={() => <Journal />} />
      </Switch>
    </div>
  )
}

export default App
