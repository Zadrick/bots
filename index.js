const r = (f)=> {
    return require(f)
},
fs = r(`fs`),
express = require(`express`),
tessod = require(`./bots/tessod`),
svr = express(),
PORT = process.env.PORT || 80

svr.get(`/init-bot`, (req, res)=> {
    res.send(`hello world`)
    tessod(req.query.bot)
})

svr.get(`/`, (req, res)=> {
    fs.readFile(`src/pages/index.php`, `utf8`, (err, data)=> {
        err? console.log(err): res.send(data)
    })
})

svr.listen(PORT)