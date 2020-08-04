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
mongo.connect(`mongodb+srv://tesla022:102410241024Sam>@cluster0.lwr3p.mongodb.net/tessod`, { useUnifiedTopology: true }, async (err, db)=> {
    console.log(`s`)
})

svr.get(`/`, (req, res)=> {
    fs.readFile(`public/index.html`, `utf8`, (err, data)=> {
        err? console.log(err): res.send(data)
    })
})

svr.listen(PORT)