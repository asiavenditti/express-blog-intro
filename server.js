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
            content: "Il dolce più richiesto",
            image: `http://localhost:${port}/images/ciambellone.jpeg`,
            tags: ["dolce", "cucina", "dessert"]
        },

        {
            title: "Cracker di barbabietola",
            content: "Cracker a base di barbabietola.",
            image: `http://localhost:${port}/images/cracker_barbabietola.jpeg`,
            tags: ["cracker", "snack", "barbabietola"]
        },
        {
            title: "Pane fritto dolce",
            content: "Pane fritto per colazione",
            image: `http://localhost:${port}/images/pane_fritto_dolce.jpeg`,
            tags: ["dolce", "colazione", "tradizione"]
        },
        {
            title: "Pasta di barbabietola",
            content: "Pasta a base di barbabietola",
            image: `http://localhost:${port}/images/pasta_barbabietola.jpeg`,
            tags: ["pasta", "barbabietola", "pranzo"]
        },
        {
            title: "Torta paesana",
            content: "Un dolce molto famoso",
            image: `http://localhost:${port}/images/torta_paesana.jpeg`,
            tags: ["torta", "dolce", "tradizione"]
        }

    ]

    res.json(posts)
})

app.listen(port, () => {
    console.log(`Example app listening on port http://localhost:${port}`);

})