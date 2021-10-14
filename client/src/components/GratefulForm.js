import React from 'react'

const GratefulForm = () => {
  return (
    <div className="grateful-form">
      <form type="text" placeholder="What are you grateful for?">
        <p>
          {' '}
          Take this time to tell us what you are grateful for, there is nothing
          too small. In retrospect we begin to see how all the little things
          that we are grateful for add up into creating our 'why's' in life.
        </p>
        <h1>What are you Grateful for? </h1>
        <input className="grateful-input"></input>
      </form>
    </div>
  )
}

export default GratefulForm
