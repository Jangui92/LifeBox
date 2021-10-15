import React from 'react'
import { Form } from 'react-bootstrap'
const JournaliesForm = () => {
  return (
    <div className="journal-container">
      <Form>
        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
          <Form.Label>Journal Title</Form.Label>
          <Form.Control type="text" placeholder="Journal Title" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
          <Form.Label>Entry </Form.Label>
          <Form.Control as="textarea" rows={3} />
        </Form.Group>
      </Form>
    </div>
  )
}

export default JournaliesForm
