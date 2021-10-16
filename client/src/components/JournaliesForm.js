import React from 'react'
import { Form, Button } from 'react-bootstrap'

const JournaliesForm = () => {
  return (
    <div>
      <h1>Journalies </h1>
      <p>
        Use the empty field below to fill out your journal entry for the day.
      </p>
      <form className="journal-form">
        <input type="date">Date: </input>
        <input type="journal" className="journalies-input">
          Journal Entry:
        </input>
        <button type="submit">Add</button>
        <button tyoe="delete">Delete</button>
      </form>

      <Form>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Date</Form.Label>
          <Form.Control type="date" placeholder="Enter Date" />
          <Form.Text className="text-muted"></Form.Text>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Journal</Form.Label>
          <Form.Control type="text" placeholder="Journal" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicCheckbox"></Form.Group>
        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </div>
  )
}

export default JournaliesForm
