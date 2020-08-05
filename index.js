const { Mongoose } = require("mongoose")

const r = f=> {
    return require(f)
},
express = r(`express`),
svr = express(),
PORT = process.env.PORT || 80,
mongo = r(`mongoose`),
welcomBot = r(`./bots/welcomeBot`),
badWordsBot = r(`./bots/badWordsBot`)

svr.use(express.static(`public`))
svr.use(express.urlencoded())

svr.get(`/`, (req, res)=> {
    res.sendFile(`public/index.htm`)
})

svr.post(`/`, (req, res)=> {
    res.sendFile(`public/index.htm`)
    console.log(req.body)
})

svr.listen(PORT)