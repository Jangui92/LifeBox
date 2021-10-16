import axios from 'axios'
import e from 'express'
import React, { useState, useEffect } from 'react'
import { BASE_URL } from '../globals'

const TipsForm = (props) => {
  const [tips, setTips] = useState([])

  let counter = 0
  useEffect(() => {
    setTip()
  }, [])

  const setTip = async () => {
    try {
      const res = await axios.get(`${BASE_URL}/`)
      setTips(res.data)
      counter += 1
    } catch (error) {
      throw error
    }
  }

  const saveTips = async (e) => {
    e.preventDefault()
    const saveTips = { content: tips.content, date: '' }
    const newTip = await axios.post('http://localhost:3001/', saveTips)
    console.log('profile page new quote', newTip.data.content)
    props.setSaveTip(newTip.data.content)
  }

  const handleSubmit = () => {
    e.preventDefault()
  }

  return (
    <div className="TipsForm">
      <h2>{tips.content} </h2>
      <form className="tips-form" onSubmit={handleSubmit}>
        <input type="date">Date: </input>
        <input type="tips" className="tips-input">
          Leave a Quote:
        </input>
        <button type="submit">Add</button>
        <button tyoe="delete">Delete</button>
      </form>
    </div>
  )
}

export default TipsForm
