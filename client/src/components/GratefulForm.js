import React from 'react'
import { Form, Button } from 'react-bootstrap'

const GratefulForm = () => {
  return (
    <div>
      <p>
        Take this time to tell us what you are grateful for, there is nothing
        too small. In retrospect we begin to see how all the little things that
        we are grateful for add up into creating our 'why's' in life.
      </p>
      <div class="form-floating">
        {/* <textarea
          class="form-control"
          placeholder="Tell us what you are grateful for."
          id="floatingTextarea2"
        ></textarea>
        <label for="floatingTextarea2">Today, I am grateful for...</label>
        <button>Add</button>
        <button></button> */}

        <Form>
          <Form.Group className="mb-3">
            <Form.Label>Date: </Form.Label>
            <Form.Control type="date" placeholder="date" />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Grateful Post:</Form.Label>
            <Form.Control type="text" placeholder="I am grateful for..." />
          </Form.Group>
          <Button variant="primary" type="submit">
            Submit
          </Button>
        </Form>
      </div>
    </div>
  )
}

export default GratefulForm
