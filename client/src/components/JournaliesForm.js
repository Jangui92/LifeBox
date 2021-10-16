import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { BASE_URL } from '../globals'

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
      <form className="journal-form" onSubmit={setJournal}>
        <input type="date">Date: </input>
        <input type="journal" className="journalies-input">
          Journal Entry:
        </input>
        <button type="submit">Add</button>
        <button tyoe="delete">Delete</button>
      </form>
    </div>
  )
}

export default JournaliesForm
