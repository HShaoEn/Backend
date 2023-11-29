var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));




//app.use('/', indexRouter);
//app.use('/users', usersRouter);

//註冊
const UserRouter = require('./routes/admin/UserRouter')
const NewsRouter = require('./routes/admin/NewsRouter')
const webNewsRouter = require('./routes/web/NewsRouter')
const webProductRouter = require('./routes/web/ProductRouter')
const ProductRouter = require('./routes/admin/ProductRouter')
const JWT = require('./util/JWT')


// webapi放在JWT驗證前
app.use(webProductRouter)
app.use(webNewsRouter)
// 在所有路由之前做JWT 過了next() 才能到之後的路由 
// 要撇開login和404
app.use((req, res, next) => {
    // 如果 token有效 next
    // 如果 token過期 返回404
    if (req.url === "/adminapi/user/login") {
        next()
        return;
    }
    
    //用空格分割成兩塊 取第二塊
    const tokenHeader = req.headers["authorization"];
    if (!tokenHeader) {
        // 处理没有 authorization 头的情况
        return res.status(401).send({
            errCode: "-1",
            errorInfo: "Authorization header missing"
        });
    }
    const token = tokenHeader.split(" ")[1];
    // console.log("tokenHeader=", tokenHeader)
    // console.log("JWT.verify(token)=", JWT.verify(token))
    if (JWT.verify(token) === false) {
        console.log("out:", 123)
        return res.status(401).send({
            errCode: "-1",
            errorInfo: "Authorization header missing"
        });
    } else {
        var payload = JWT.verify(token);
        const newToken = JWT.generate({
            _id: payload._id,
            username: payload.username
        }, "1d")
        // 重新給前端存新的token 經過前端的axios攔截設置
        res.header("authorization", newToken)
        next()
    }
    // else 解構payload 重新發送
})


// .\mongod.exe --dbpath=C:\Users\USER\Desktop\codeproject\db

/*

/adminapi/* 給後臺系統用的接口
/webapi/*   給官網用的接口

 */
app.use(UserRouter)
app.use(NewsRouter)
app.use(ProductRouter)


// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
