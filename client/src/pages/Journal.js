import React, { useState, useEffect } from 'react'
import TipsForm from '../components/TipsForm'
import JournaliesForm from '../components/JournaliesForm'
import CommentsForm from '../components/CommentsForm'
import GratefulForm from '../components/GratefulForm'
import axios from 'axios'

function Journal(props) {
  const [quote, setQuote] = useState({})

  let count = 0
  useEffect(() => {
    getQuotes()
  }, [count])

  const getQuotes = async () => {
    try {
      const res = await axios.get(
        `http://api.quotable.io/random?tags=inspirational`
      )
      setQuote(res.data)
      count += 1
    } catch (error) {
      throw error
    }
  }

  return (
    <div>
      <h1 className="qod">Quote of the Day</h1>
      <div className="daily-quote">
        <p className="center-quote">"{quote.content}"</p>

        <p> </p>
      </div>
      <TipsForm />
      <JournaliesForm />
      <CommentsForm />
      <GratefulForm />
    </div>
  )
}

export default Journal
