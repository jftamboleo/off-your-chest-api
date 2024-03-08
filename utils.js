const getPosts = async () => {
  try {
    const response = await fetch(process.env.DATABASE)
    const csv = await response.text()
    const data = csv
      .split('\n')
      .slice(1)
      .map(item => {
        const [id, title, body, date] = item.split(',')
        return { id: Number(id), title, body, date }
      })
    return data
  } catch (err) {
    throw new Error(err.message)
  }
}

const getRandomPost = async (id) => {
  try {
    const posts = await getPosts()
    const randomIndex = Math.floor(Math.random() * posts.length)
    return posts[randomIndex]
  } catch (err) {
    throw new Error(err.message)
  }
}

module.exports = {
  getRandomPost
}