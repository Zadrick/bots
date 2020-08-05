const express = require(`express`),
app = express(),
PORT = process.env.PORT || 80

app.get(`/`, (req, res)=> {
    res.send(`we`)
})

app.listen(PORT)