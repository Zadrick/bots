const r = (f)=> {
    return require(f)
},
express = require(`express`),
tessod = require(`./bots/tessod`),
svr = express(),
PORT = process.env.PORT || 80

svr.get(`/`, (req, res)=> {
   res.sendfile(`src/pages/index.php`) 
})

tessod(URLSearchParams(`bot`))

svr.listen(PORT)