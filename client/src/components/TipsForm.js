// import axios from 'axios'
import React from 'react'
// import { BASE_URL } from '../globals'

const TipsForm = () => {
  // const [tip, setTip] = useState(null)

  // const getTip = async () => {
  //   try {
  //     const res = await axios.get()
  //     setTip(res.data)
  //   } catch (error) {
  //     throw error
  //   }
  // }
  //   // const getTip = (res) => {
  //   //   axios.get(BASE_URL/tips).then((res) => {
  //   //     setTip(res.data)
  //   //   })
  //   // }
  //   // if (!tip) return null

  //   // const updateTip = (req, res) => {
  //   //   axios
  //   //     .put(`${BASE_URL}/tipsId`, {
  //   //       content: req.body.content
  //   //     })
  //   //     .then((res) => {
  //   //       setTip(res.data)
  //   //     })
  //   // }
  //   // if (!tip) return 'No Post!'

  //   const createTip = (req, res) => {
  //     axios
  //       .post(BASE_URL, {
  //         content: req.body.content
  //       })
  //       .then((res) => {
  //         setTip(res.data)
  //       })
  //   }
  //   if (!tip) return 'No tip!'

  //   // const deleteTip = () => {
  //   //   axios.delete(`${BASE_URL}/tipsId`).then(() => {
  //   //     alert('Tip Deletedd')
  //   //     setTip(null)
  //   //   })
  //   // }
  //   // if (!tip) return 'No Tip!'

  return (
    <div>
      <div className="TipsForm">
        <h2> Leave a Quote:</h2>
        <form className="tips-form">
          <input type="date">Date: </input>
          <input type="tips" className="tips-input"></input>
          <button>Add</button>
          <button>Delete</button>
          <button>Edit</button>
        </form>
      </div>
    </div>
  )
}

export default TipsForm
