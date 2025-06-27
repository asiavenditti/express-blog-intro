const express = require('express')
const app = express()
const port = 3000
app.use(express.static('public'))

app.get('/', (req, res) => {

    res.send('Welcome to my Blog')

})


app.get("/api/posts", (req, res) => {
    const posts = [
        {
            title: "Ciambellone",
            content: "questo è un ciambellone",
            image: `http://localhost:${port}/images/ciambellone.jpeg`,
            tags: ["dolce", "cucina", "dessert"]
        }
    ]

    res.json(posts)
})

app.listen(port, () => {
    console.log(`Example app listening on port http://localhost:${port}`);

})