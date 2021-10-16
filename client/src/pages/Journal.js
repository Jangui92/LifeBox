import React, { useState, useEffect } from 'react'
import TipsForm from '../components/TipsForm'
import JournaliesForm from '../components/JournaliesForm'
import CommentsForm from '../components/CommentsForm'
import GratefulForm from '../components/GratefulForm'
import axios from 'axios'

function Journal(props) {
  const [quote, setQuote] = useState({})
  // const [tip, setTip] = useState([])

  useEffect(() => {
    getQuotes()
  })

  const getQuotes = async () => {
    try {
      const res = await axios.get(
        `http://api.quotable.io/random?tags=inspirational`
      )
      setQuote(res.data)
    } catch (error) {
      throw error
    }
  }

  return (
    <div>
      <h1> Hello! </h1>

      <h1>Quote of the Day</h1>
      <div className="daily-quote">
        <p>{quote.content}</p>
        <p> </p>
        <p> </p>
      </div>
      <TipsForm />
      <JournaliesForm />
      <GratefulForm />
      <CommentsForm />
    </div>
  )
}

export default Journal
