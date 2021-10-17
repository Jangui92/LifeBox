import React from 'react'
import { Row, Form, Col } from 'react-bootstrap'
// import axios from 'axios'
// const baseURL = 'https://jsonplaceholder.typicode.com/posts'

const CommentsForm = () => {
  // const [postComment, setComment] = React.useState(null)
  // React.useEffect(() => {
  //   axios.get(`${baseURL}/1`).then((response) => {
  //     setComment(response.data)
  //   })
  // }, [])
  // function postComments() {
  //   axios
  //     .post(baseURL, {
  //       date: '',
  //       body: ''
  //     })
  //     .then((response) => {
  //       setComment(response.data)
  //     })
  // }
  // if (!postComment) return 'No comment'
  return (
    <div>
      <Row className="text-field">
        <Col>
          <Form.Control size="lg" type="text" placeholder="Leave a Comment" />
        </Col>
      </Row>
      <button className="buttons">Add</button>
      <button className="dbuttons">Delete</button>
      <button className="ebuttons">Edit</button>
    </div>
  )
}
export default CommentsForm
