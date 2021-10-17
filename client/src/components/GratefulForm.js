import React from 'react'
import { Row, Form, Col } from 'react-bootstrap'

const GratefulForm = () => {
  return (
    <div>
      <p className="gratefulp">
        This section is intentionally made for you to focus on gratitude. No
        matter how big or small. Watch it boost your day!
      </p>
      <Row>
        <Col>
          <Form.Control
            className="text-field"
            size="lg"
            type="text"
            placeholder="What are you greatful for?"
          />
        </Col>
      </Row>
      <button className="buttons">Add</button>
      <button className="dbuttons">Delete</button>
      <button className="ebuttons">Edit</button>
    </div>
  )
}

export default GratefulForm
