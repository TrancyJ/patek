
// 1:加载对应模块
const http = require("http")
const express = require("express")
const bodyParser = require("body-parser")
const cookieParser = require("cookie-parser")
const expressSession = require("express-session")
const cors = require("cors")
// 2：引用连接池
const pool = require("./pool")
// 3：创建express对象
var app = express()
var server = http.createServer(app)
server.listen(3002)
// 4：配置第三方模块
//     4.1 配置跨域模块
// origin 允许来自哪个域名下跨域访问
app.use(cors({
    origin:["http://127.0.0.1"],
    credentials:true
}))
//     4.2 post req.body.uname
app.use(bodyParser.urlencoded({extended:false}))
//     4.3 cookie/session
app.use(cookieParser())
//获取代理商列表
app.get("/map_list",(req,res)=>{
    //获取连接
    pool.getConnection((err,conn)=>{
        if(err)throw err
        var sql="SELECT * FROM pt_agent"
        conn.query(sql,(err,result)=>{
            if(err)throw err
            res.json(result)
        })
        conn.release()
    })
})
//获取产品展示信息
app.get("/product_list",(req,res)=>{
    //获取连接
    pool.getConnection((err,conn)=>{
        if(err)throw err
        var sql="SELECT pid,watch_name,style,href,pic FROM pt_product"
        conn.query(sql,(err,result)=>{
            if(err)throw err
            res.json(result)
        })
        conn.release()
    })
})
app.get("/product_list_search",(req,res)=>{
    //获取连接
    var series=req.query.series
    if(!series){
        return
    }
    pool.getConnection((err,conn)=>{
        if(err)throw err
        var sql="SELECT pid,watch_name,style,href,pic FROM pt_product WHERE series=?"
        conn.query(sql,[series],(err,result)=>{
            if(err)throw err
            res.json(result)
        })
        conn.release()
    })
})
app.get("/product_detail",(req,res)=>{
    //获取连接
    var pid=req.query.pid
    var reg = /^[0-9]{1,}$/;
    if(!reg.test(pid)){
        res.json({code:-1,msg:"参数有误"});
        return;
    }
    var progress=0,output={}
    pool.getConnection((err,conn)=>{
        if(err)throw err
        var sql="SELECT * FROM pt_product WHERE pid=?"
        conn.query(sql,[pid],(err,result)=>{
            if(err)throw err
            progress+=50
            output.data=result[0]
            if(progress==100) {
                res.json(output)
            }
        })
        conn.release()
    })
    pool.getConnection((err,conn)=>{
        if(err)throw err
        var sql="SELECT * FROM pt_pic WHERE pid=?"
        conn.query(sql,[pid],(err,result)=>{
            if(err)throw err
            progress+=50
            output.pic=result
            if(progress==100) {
                res.json(output)
            }
        })
        conn.release()
    })
})