import React from 'react'

const JournaliesForm = () => {
  return (
    <div className="journalies-form">
      <form type="text" placeholder="What are you grateful for?">
        <h1>Journalies </h1>
        <p>
          {' '}
          Use the empty field below to fill out your journal entry for the day.
        </p>
        <input className="journalies-input"></input>
        <button>Add</button>\<button>Delete</button>
      </form>
    </div>
  )
}

export default JournaliesForm
