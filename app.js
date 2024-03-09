const express = require('express')
const cors = require('cors')
const { getRandomPost } = require('./utils')

const app = express()

app.use(cors())
app.use(express.json())

app.get('/api/v1/posts/', async (req, res) => {
  const randomPost = await getRandomPost()
  res.json(randomPost)
})

app.post('/api/v1/posts/', (req, res) => {
  const { title, body } = req.body
  const newPost = {
    id: crypto.randomUUID(),
    title,
    body,
    date: new Date()
  }
  // TODO: add newPost to db
  res.json(newPost)
})

const PORT = process.env.PORT

app.listen(PORT, () => {
  console.log(`listening on http://localhost:${PORT}`)
})