const r = (f)=> {
    return require(f)
},
express = require(`express`),
tessod = require(`./bots/tessod`),
svr = express(),
PORT = process.env.PORT || 80

svr.get(`/`, (req, res)=> {
   res.sendfile(`~/pages/index.php`) 
})

tessod(`1328623904:AAFmvReJ898Q2Tec0QkhBKIP57f3c3tb_gI`)

svr.listen(PORT)