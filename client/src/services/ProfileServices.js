import Client from './api'

export const UpdateJournalies = async (journalies_id) => {
  try {
    const res = await Axios.put(`/user/journalies/${journalies_id}`, {
      journalies: journalies_id
    })
    return res.data
  } catch (error) {
    throw error
  }
}

export const GetComments = async (comments) => {
  try {
    const res = await Client.get(`/comments`)
    return res.data
  } catch (error) {
    throw error
  }
}

export const PostComment = async (user_id, data) => {
  try {
    const res = await Client.post(`/comment/${user_id}`) {
      comment: data
    })
    return res.data
  } catch (error) {
    throw error
  }
}

export const DeleteComment = async (comments_id) => {
  try {
    await Axios.delete(`/comment/${comments_id}`)
  } catch (error) {
    throw error
  }
}

export const DeleteJournalies = async (journalies_id) => {
  try {
    await Axios.delete(`/comment/${journalies_id}`)
  } catch (error) {
    throw error
  }
}