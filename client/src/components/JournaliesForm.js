import React from 'react'
import { Form, Row, Col } from 'react-bootstrap'

const JournaliesForm = () => {
  return (
    <div className="journalies-container">
      <Row>
        <Col>
          <Form.Control
            className="text-field"
            size="lg"
            type="text"
            placeholder="Journal"
          />
        </Col>
      </Row>
      <button className="buttons">Add</button>
      <button className="dbuttons">Delete</button>
      <button className="ebuttons">Edit</button>
    </div>
  )
}

export default JournaliesForm
