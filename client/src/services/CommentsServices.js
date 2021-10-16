import Client from './api'


export const GetComments = async () => {
  try {
    const res = await Client.get(`/comments`)
    return res.data
  } catch (error) {
    throw error
  }
}

export const PostComment = async (comments_id) => {
  try {
    const res = await Client.post(`/comments_id`) {
      comment: data
    }
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