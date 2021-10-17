// import axios from 'axios'
import React from 'react'
import { Row, Col, Form } from 'react-bootstrap'
// import { BASE_URL } from '../globals'

const TipsForm = () => {
  // const getTip = async () => {
  //   try {
  //     const res = await axios.get()
  //     setTip(res.data)
  //   } catch (error) {
  //     throw error
  //   }
  // }
  // const getTip = (res) => {
  //   axios.get(BASE_URL/tips).then((res) => {
  //     setTip(res.data)
  //   })
  // }
  // if (!tip) return null

  // const updateTip = (req, res) => {
  //   axios
  //     .put(`${BASE_URL}/tipsId`, {
  //       content: req.body.content
  //     })
  //     .then((res) => {
  //       setTip(res.data)
  //     })
  // }
  // if (!tip) return 'No Post!'

  // const createTip = (req, res) => {
  //   axios
  //     .post(BASE_URL, {
  //       content: req.body.content
  //     })
  //     .then((res) => {
  //       setTip(res.data)
  //     })
  // }
  // if (!tip) return 'No tip!'

  // const deleteTip = () => {
  //   axios.delete(`${BASE_URL}/tipsId`).then(() => {
  //     alert('Tip Deletedd')
  //     setTip(null)
  //   })
  // }
  // if (!tip) return 'No Tip!'

  return (
    <div>
      <div className="TipsForm">
        <Row className="text-field">
          <Col>
            <Form.Control
              size="lg"
              type="text"
              placeholder="Leave a Quote or helpful tip"
            />
          </Col>
        </Row>
        <button className="buttons">Add</button>
        <button className="dbuttons">Delete</button>
        <button className="ebuttons">Edit</button>
      </div>
    </div>
  )
}

export default TipsForm
