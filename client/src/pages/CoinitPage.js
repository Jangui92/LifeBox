import React, { useState } from 'react'
import Coinit from '../components/Coinit'
import axios from 'axios'

const CoinitPage = () => {
  const [quote, setQuote] = useState({})
  const getSavedQuotes = (async) => {
    try {
      const res = axios.post(
        `http://api.quotable.io/random?tags=inspirational`,
        { quote }
      )
      setQuote(res.data.quote)
    } catch (error) {
      throw error
    }
  }
  return (
    <div>
      <h1>Coin it </h1>
      <Coinit />
    </div>
  )
}

export default CoinitPage
