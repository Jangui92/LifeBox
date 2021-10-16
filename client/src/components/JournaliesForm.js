import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { BASE_URL } from '../globals'
import { Form, Button } from 'react-bootstrap'

const JournaliesForm = () => {
  const [journal, setJournal] = useState({})

  useEffect(() => {
    getJournal()
  })

  const getJournal = async () => {
    const journals = await axios.post(`${BASE_URL}`)
    console.log(journals)
  }
  return (
    <div>
      <h1>Journalies </h1>
      <p>
        Use the empty field below to fill out your journal entry for the day.
      </p>
      {/* <form className="journal-form" journal={journal} setJournal={setJournal}>
        <input type="date">Date: </input>
        <input type="journal" className="journalies-input">
          Journal Entry:
        </input>
        <button type="submit">Add</button>
        <button tyoe="delete">Delete</button>
      </form> */}

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
        <Form.Group className="mb-3" controlId="formBasicCheckbox">
          {journal}
        </Form.Group>
        <Button variant="primary" type="submit" setJournal={setJournal}>
          Submit
        </Button>
      </Form>
    </div>
  )
}

export default JournaliesForm
