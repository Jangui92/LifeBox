const express = require('express')
const cors = require('cors')
const logger = require('morgan')
const bodyParser = require('body-parser')
const CommentsRouter = require('./routes/CommentsRouter')
const TipsRouter = require('./routes/TipsRouter')
const UserRouter = require('./routes/UserRouter')
const path = require('path')
const app = express()

const PORT = process.env.PORT || 3001

app.use(cors())
app.use(logger('dev'))
app.use(bodyParser.json())
app.use('/comments', CommentsRouter)
app.use('/user', UserRouter)
app.use('/tips', TipsRouter)

if (process.env.NODE_ENV === 'production') {
  app.use(express.static(path.join(__dirname, 'client/build')))
  app.get('*', (req, res) => {
    res.sendFile(path.join(`${__dirname}/client/build/index.html`))
  })
}

app.listen(PORT, async () => {
  try {
    console.log(`Server Running On Port: ${PORT}`)
  } catch (error) {
    throw new Error('Connection error')
  }
})
