const r = f=> {
    return require(f)
},
express = r(`express`),
svr = express(),
PORT = process.env.PORT || 80,
fs = r(`fs`),
mongo = r(`mongoose`),
welcomeBot = r(`./bots/welcomeBot`),
badWordsBot = r(`./bots/badWordsBot`)

badWordsBot(`1328623904:AAFmvReJ898Q2Tec0QkhBKIP57f3c3tb_gI`)

svr.use(express.static(`public`))
svr.use(express.urlencoded({extended: false}))

mongo.connect(`mongodb+srv://tesla022:102410241024Sam@cluster0.lwr3p.mongodb.net/tessod?retryWrites=true&w=majority`,
    { 
        useUnifiedTopology: true, 
        useNewUrlParser: true 
    }, 
    (err, db)=> {
        let res
        err? console.error(err): 
        res = db.collection(`welcome`).find()
        res.forEach(el => {
            welcomeBot(el.token)
            console.log(el.token)
        });
        res = db.collection(`badWords`).find()
        res.forEach(el => {
            badWordsBot(el.token)
        });
    })

svr.get(`/`, (req, res)=> {
    res.sendFile(__dirname + `/public/index.htm`)
})

svr.post(`/`, (req, res)=> {
    res.sendFile(__dirname + `/public/index.htm`)
    mongo.connect(`mongodb+srv://tesla022:102410241024Sam@cluster0.lwr3p.mongodb.net/tessod?retryWrites=true&w=majority`,
    { 
        useUnifiedTopology: true, 
        useNewUrlParser: true 
    }, 
    (err, db)=> {
        let result
        err? console.error(err):
        result = db.collection(req.body.botKind).insertOne({_id: null, token: req.body.botToken})
        res? res.send(`succesfully added to db`): false
    })
})

svr.listen(PORT)