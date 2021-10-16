import React, { useState, useEffect } from 'react'
import TipsForm from '../components/TipsForm'
import JournaliesForm from '../components/JournaliesForm'
import CommentsForm from '../components/CommentsForm'
import GratefulForm from '../components/GratefulForm'
import axios from 'axios'

const Profile = (props) => {
  const [quote, setQuote] = useState({})

  let counter = 0
  useEffect(() => {
    getQuotes()
  }, [])

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

  const saveQuotes = async (e) => {
    e.preventDefault()
    const saveTips = { content: quote.content, date: '' }
    const newQuote = await axios.post('http://localhost:3001/tips', saveTips)
    console.log('profile page new quote', newQuote.data.content)
    props.setSaveTip(newQuote.data.content)
  }

  return (
    <div>
      <h1> Hello! </h1>

      <h1>Quote of the Day</h1>

      <p>{quote.content}</p>
      <button
        className="quote-button"
        type="click"
        onClick={(e) => saveQuotes(e)}
      >
        Coin It
      </button>
      <TipsForm />
      <JournaliesForm />
      <GratefulForm />
      <CommentsForm />
    </div>
  )
}

export default Profile
