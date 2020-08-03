const r = (f)=> {
    return require(f)
},
express = require(`express`),
tessod = require(`./bots/tessod`),
svr = express()

tessod(`1328623904:AAFmvReJ898Q2Tec0QkhBKIP57f3c3tb_gI`)

svr.listen(3000)