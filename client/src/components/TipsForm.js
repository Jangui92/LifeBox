import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Row, Col, Form } from 'react-bootstrap'
import { BASE_URL } from '../globals'

const TipsForm = () => {
  return (
    <div>
      <div className="TipsForm">
        {/* <Row>
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
        </button> */}
      </div>
    </div>
  )
}

export default TipsForm
