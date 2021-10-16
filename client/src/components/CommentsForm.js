import React from 'react'
import { Button, Card } from 'react-bootstrap'
import axios from 'axios'
const baseURL = 'https://jsonplaceholder.typicode.com/posts'

export default function App() {
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
    <Card className="mb-2 comment-card" fluid className="comment-card">
      <Card.Header>
        {postComment.date}
        <Button className="modal-button-del">X</Button>
      </Card.Header>
      <Card.Body>
        <Card.Text>{postComment.comment}</Card.Text>
      </Card.Body>
    </Card>
  )
}
