import axios from 'axios'
import e from 'express'
import React, { useState, useEffect } from 'react'
import { BASE_URL } from '../globals'

const TipsForm = (props) => {
  const [tip, setTip] = React.useState(null)

  const createTip = () => {
    axios
      .post(BASE_URL, {
        content: req.body.content
      })
      .then((response) => {
        setTip(response.data)
      })
  }
  if (!tip) return 'No tip!'

  const deleteTip = () => {
    axios.delete(`${BASE_URL}/1`).then(() => {
      alert('Tip Deletedd')
      setTip(null)
    })
  }
  if (!tip) return 'No Tip!'
  return (
    <div className="TipsForm">
      <h2>{tip} </h2>
      <form className="tips-form">
        <input type="date">Date: </input>
        <input type="tips" className="tips-input">
          Leave a Quote:
        </input>
        <button type="submit" onClick={createTip}>
          Add
        </button>
        <button tyoe="delete" onClick={deleteTip}>
          Delete
        </button>
      </form>
    </div>
  )
}

export default TipsForm
