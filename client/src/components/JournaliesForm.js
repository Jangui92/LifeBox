import React from 'react'

const JournaliesForm = () => {
  return (
    <div>
      <h1>Journalies </h1>
      <p>
        Use the empty field below to fill out your journal entry for the day.
      </p>
      <form>
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
