import Axios from 'axios'


export const GetComments = async () => {
  try {
    const res = await axios.get(`/comments`)
    return res.data
  } catch (error) {
    throw error
  }
}

export const PostComment = async (comments_id) => {
  try {
    const res = await axios.post(`/comments_id`) {
      comment: data
    }
    return res.data
  } catch (error) {
    throw error
  }
