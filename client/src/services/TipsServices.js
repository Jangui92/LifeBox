import axios from 'axios'

async function randomQuote() {
  const response = await axios.get('https://api.quotable.io/random')
  const data = await response.json()
  console.log(`${data.content} —${data.author}`)
}
randomQuote()
