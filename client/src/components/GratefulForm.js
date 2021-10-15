import React from 'react'

const GratefulForm = () => {
  return (
    <div>
      <p>
        Take this time to tell us what you are grateful for, there is nothing
        too small. In retrospect we begin to see how all the little things that
        we are grateful for add up into creating our 'why's' in life.
      </p>
      <div class="form-floating">
        <textarea
          class="form-control"
          placeholder="Tell us what you are grateful for."
          id="floatingTextarea2"
        ></textarea>
        <label for="floatingTextarea2">Today, I am grateful for...</label>
        <button>Add</button>
      </div>
    </div>
  )
}

export default GratefulForm
