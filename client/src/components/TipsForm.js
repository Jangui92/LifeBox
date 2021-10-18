import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Row, Col, Form } from 'react-bootstrap'
import { BASE_URL } from '../globals'

const TipsForm = () => {
  const [tip, setTip] = useState({})
  const [updatetip, setUpdateTip] = useState({})
  const [createtip, setCreateTip] = useState({})
  const [deletetip, setDeleteTip] = useState({})

  useEffect(() => {
    getTips()
    updateTip()
    createTip()
    deleteTip()
  })

  const getTips = async () => {
    try {
      const res = await axios.get(
        `${BASE_URL}/tips
      `
      )
      setTip(res.data)
    } catch (error) {
      throw error
    }
  }

  if (!tip) return null

  const updateTip = (req, res) => {
    axios
      .put(`${BASE_URL}/tipsId`, {
        content: ''
      })
      .then((res) => {
        setUpdateTip(res.data)
      })
  }
  if (!updatetip) return 'No Post!'

  const createTip = (req, res) => {
    axios
      .post(BASE_URL, {
        content: ''
      })
      .then((res) => {
        console.log(res)
        setCreateTip(res.data)
      })
  }
  if (!createtip) return 'No tip!'

  const deleteTip = () => {
    axios.delete(`${BASE_URL}/tipsId`).then(() => {
      alert('Tip Deleted')
      setDeleteTip(null)
    })
  }
  if (!deletetip) return 'No Tip!'

  return (
    <div>
      <div className="TipsForm">
        <Row>
          <Col>
            <Form.Control
              className="text-field"
              size="lg"
              type="text"
              placeholder="Leave a Quote or helpful tip"
              getTips={getTips}
            />
          </Col>
        </Row>
        <button className="buttons" onClick={createTip}>
          Add
        </button>
        <button className="dbuttons" onClick={deleteTip}>
          Delete
        </button>
        <button className="ebuttons" onClick={updateTip}>
          Edit
        </button>
      </div>
    </div>
  )
}

export default TipsForm
