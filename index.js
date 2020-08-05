const { Mongoose } = require("mongoose")

const r = (f)=> {
    return require(f)
},
fs = r(`fs`),
express = r(`express`),
svr = express(),
PORT = process.env.PORT || 80,
mongo = r('mongodb').MongoClient,
//bots
welcomeBot = r(`./bots/welcomeBot`),
badWordsBot = r(`./bots/badWordsBot`)

svr.use(express.static(`public`))
svr.use(express.urlencoded())
mongo.connect(`mongodb+srv://tesla022:102410241024Sam>@cluster0.lwr3p.mongodb.net/tessod`, { useUnifiedTopology: true }, async (err, db)=> {
    db.tessod.find()
})

svr.get(`/`, (req, res)=> {
    fs.readFile(`public/index.html`, `utf8`, (err, data)=> {
        err? console.error(err): res.send(data)
    })
})

svr.post(`/`, (req, res)=> {
    console.log(req.body)
})

svr.listen(PORT)