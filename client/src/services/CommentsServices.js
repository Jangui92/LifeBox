import Client from './api'

export const GetComments = async () => {
  try {
    const res = await Client.get(`/comments`)
    return res.data
  } catch (error) {
    throw error
  }
}

export const PostComment = async (commentsId) => {
  try {
    const res = await Client.post(`/${commentsId}`)
    comment: commentsId

    return res.data
  } catch (error) {
    throw error
  }
}

export const UpdateComments = async (commentsId) => {
  try {
    const res = await Client.put(`/user/comments/${commentsId}`, {
      comment: commentsId
    })
    return res.data
  } catch (error) {
    throw error
  }
}

export const DeleteComment = async (comments_id) => {
  try {
    await Client.delete(`/comments/${comments_id}`)
  } catch (error) {
    throw error
  }
}
