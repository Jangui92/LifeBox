import React, { useState, useEffect } from 'react'
import TipsForm from '../components/TipsForm'
import JournaliesForm from '../components/JournaliesForm'
import CommentsForm from '../components/CommentsForm'
import GratefulForm from '../components/GratefulForm'
import axios from 'axios'

const Journal = (props) => {
  const [quote, setQuote] = useState({})
  const [tip, setTip] = useState([])

  let counter = 0
  useEffect(() => {
    getQuotes()
  }, [counter])

  const getQuotes = async () => {
    try {
      const res = await axios.get(
        `http://api.quotable.io/random?tags=inspirational`
      )
      setQuote(res.data)
      counter += 1
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
        <p> {getQuotes}</p>
        <p setTip={setTip}> {tip} </p>
      </div>
      <TipsForm />
      <JournaliesForm />
      <GratefulForm />
      <CommentsForm />
    </div>
  )
}

export default Journal
