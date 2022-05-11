const express = require('express')
const app = express()

const port = 5000

app.get('/', (req, res) => {
    res.send('Welcome to Express REST-API Home page!')
})

app.get('/about', (req, res) => {
    res.send('Welcome to Express REST-API About page!')
})

app.get('/sys', (req, res) => {
    res.send('Welcome to Express REST-API System page!')
})

app.get('*', (req, res) => {
    res.send('Page not found!')
})


app.listen(port, () => {
    console.log(`Express app listening on port ${port}`)
})