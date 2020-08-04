const r = (f)=> {
    return require(f)
},
fs = r(`fs`),
express = require(`express`),
tessod = require(`./bots/tessod`),
svr = express(),
PORT = process.env.PORT || 80

svr.get(`/initBot`, (req, res)=> {
    console.log(req.query)
    req.query.token? (
        res.send(`bot is active`), tessod(req.query.token)
    ): res.send(`add bot token`)
})

svr.get(`/`, (req, res)=> {
    fs.readFile(`src/pages/index.php`, `utf8`, (err, data)=> {
        err? console.log(err): res.send(data)
    })
})

svr.listen(PORT)