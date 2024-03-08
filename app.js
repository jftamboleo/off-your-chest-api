const express = require('express')
const { getRandomPost } = require('./utils')

const app = express()
app.use(express.json())

app.get('/api/v1/posts/', async (req, res) => {
  const randomPost = await getRandomPost()
  res.json(randomPost)
})

const PORT = process.env.PORT

app.listen(PORT, () => {
  console.log(`listening on http://localhost:${PORT}`)
})