const dataApp = require('./data.json')
const seller = dataApp.seller  //商家
const goods = dataApp.goods
const ratings = dataApp.ratings

module.exports = {
    lintOnSave:false,
    devServer:{
        before(app){
            app.get('/api/seller',(req,res) => {
                res.json({
                    err:0,
                    data:seller
                })
            }),
            app.get('/api/goods',(req,res) => {
                res.json({
                    err:0,
                    data:goods
                })
            }),
            app.get('/api/ratings',(req,res) => {
                res.json({
                    err:0,
                    data:ratings
                })
            })
        }
    }
}