
//引用express
var express = require('express');
   
//引用express-handlebars模板引擎
var hbs = require('express-handlebars').create({ 
        extname: '.hbs'         //设置文件后缀名为.hbs
    });   
var app = express();

app.set('port',process.env.PORT || 3000);   //设置端口

//设置模板引擎为express-handlebars
app.engine('hbs',hbs.engine);
app.set('view engine','hbs');

//使用static中间件 制定public目录为静态资源目录,其中资源不会经过任何处理
app.use(express.static(__dirname + '/public'));

//home页路由
app.get('/home', function (req, res) {
   res.render('home',{
       title:'Home Page'    //传入页面的title
   });
});

app.listen(app.get('port'), function () {
    console.log( '服务器启动完成，端口为： '+app.get('port') );
});