import Client from 'api'
import 'seeders/tips.js'

export const GetQuotes = async () => {
  try {
    const res = await axios.get(`/quotes`)
    return res.data
  } catch (error) {
    throw error
  }
}

export const DeleteQuote = async (req, res) => {
  try {
    await Axios.delete(`/quotes/:id}`)
  } catch (error) {
    throw error
  }
}
