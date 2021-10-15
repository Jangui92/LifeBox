import axios from 'axios'

async function randomQuote() {
  try{
  const response = await axios.get('/') }
  const data = await response.json()
  console.log(`${data.content} —${data.author}`)
  } catch (error) {
  throw error
}
randomQuote()


export const GetQuotes = async () => {
  try {
    const res = await Axios.get(`/quotes`)
    return res.data
  } catch (error) {
    throw error
  }
}



export const DeleteQuote = async (/quotes/:id) => {
  try {
    await Axios.delete(`/quotes/:id}`)
  } catch (error) {
    throw error
  }
}