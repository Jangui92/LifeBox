import React from 'react'
import { Row, Form, Col } from 'react-bootstrap'
import axios from 'axios'
import {
  UpdateComments,
  DeleteComment,
  PostComment,
  GetComments
} from '../services/CommentsServices'

const CommentsForm = (props) => {
  const deleteComment = async () => {
    await DeleteComment(props.commentId)
  }
  const getComments = async () => {
    const data = await GetComments(props.commentsId)
  }
  const updateComment = async () => {
    const data = await UpdateComments(props.commentsId)
  }

  return (
    <div>
      <Row>
        <Col>
          <Form.Control
            className="text-field"
            size="lg"
            type="text"
            placeholder="Leave a Comment"
            getComments={getComments}
          />
        </Col>
      </Row>
      <button className="buttons" onClick={postComment}>
        Add
      </button>
      <button className="dbuttons" onClick={deleteComment}>
        Delete
      </button>
      <button className="ebuttons" onClick={updateComment}>
        Edit
      </button>
    </div>
  )
}
export default CommentsForm
