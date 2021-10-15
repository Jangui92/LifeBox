import React from 'react'
import { Button, Card } from 'react-bootstrap'
// import { DeleteComment } from '../services/CommentServices'

const CommentsForm = () => {
  return <div className="comments-container"></div>
}

export default CommentsForm

const CommentCard = (props) => {
  const deleteComment = async () => {
    // await DeleteComment(props.commentsId)
    props.getPhotoComments()
    props.showModal()
  }

  return (
    <Card className="mb-2 comment-card" fluid className="comment-card">
      <Card.Header>
        {props.name}
        {/* <Button onClick={deleteComment} className="modal-button-del"> */}X
        {/* </Button> */}
      </Card.Header>
      <Card.Body>
        <Card.Text>{props.comment}</Card.Text>
      </Card.Body>
    </Card>
  )
}
