import React from 'react'

const JournaliesForm = () => {
  return (
    <div class="form-floating">
      <textarea
        class="form-control"
        placeholder="Tell us about yourself"
        id="floatingTextarea2"
      ></textarea>
      <label for="floatingTextarea2">About Me</label>
      <button>Post</button>
    </div>
  )
}

export default JournaliesForm
