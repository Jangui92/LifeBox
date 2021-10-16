import axios from 'axios'
import React, { useState } from 'react'
import { BASE_URL } from '../globals'

const TipsForm = (props) => {
  const [tip, setTip] = useState(null)

  const getTip = async () => {
    try {
      const res = await axios.get()
      setTip(res.data)
    } catch (error) {
      throw error
    }
  }
  // const getTip = (res) => {
  //   axios.get(BASE_URL).then((res) => {
  //     setTip(res.data)
  //   })
  // }
  // if (!tip) return null

  // const updateTip = (req, res) => {
  //   axios
  //     .put(`${BASE_URL}/1`, {
  //       content: req.body.content
  //     })
  //     .then((res) => {
  //       setTip(res.data)
  //     })
  // }
  // if (!tip) return 'No Post!'

  const createTip = (req, res) => {
    axios
      .post(BASE_URL, {
        content: req.body.content
      })
      .then((res) => {
        setTip(res.data)
      })
  }
  if (!tip) return 'No tip!'

  // const deleteTip = () => {
  //   axios.delete(`${BASE_URL}/1`).then(() => {
  //     alert('Tip Deletedd')
  //     setTip(null)
  //   })
  // }
  // if (!tip) return 'No Tip!'

  return (
    <div className="TipsForm">
      <h2>{tip} </h2>
      <form className="tips-form">
        <input type="date">Date: </input>
        <input type="tips" className="tips-input">
          Leave a Quote:
          <p>{tip.body}</p>
        </input>
        <button onClick={createTip}>Add</button>
        {/* <button onClick={deleteTip}>
          Delete
        </button>
        <button onClick={updateTip}>
          Edit
        </button> */}
        <input type="showTip" getTip={getTip}>
          Get Tip
        </input>
      </form>
    </div>
  )
}

export default TipsForm
