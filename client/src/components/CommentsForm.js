import React from 'react'
import { Button, Card } from 'react-bootstrap'
import axios from 'axios'
const baseURL = 'https://jsonplaceholder.typicode.com/posts'

const CommentsForm = () => {
  const [postComment, setComment] = React.useState(null)
  React.useEffect(() => {
    axios.get(`${baseURL}/1`).then((response) => {
      setComment(response.data)
    })
  }, [])
  function postComments() {
    axios
      .post(baseURL, {
        date: '',
        body: ''
      })
      .then((response) => {
        setComment(response.data)
      })
  }
  if (!postComment) return 'No comment'
  return (
    <Card className="mb-2 comment-card" fluid>
      <Card.Header>
        {postComments.date}
        <Button className="modal-button-del">X</Button>
      </Card.Header>
      <Card.Body>
        <Card.Text>{postComments.comment}</Card.Text>
      </Card.Body>
    </Card>
  )
}
export default CommentsForm
