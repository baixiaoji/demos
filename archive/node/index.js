var http = require('http')
var fs = require('fs')

//console.log(Object.keys(http))
var port = process.env.PORT || 1996;

var server = http.createServer(function(request, response){
  
  //console.log(request);

  if(request.url === '/hi'){
		
    response.end('<title>第一个页面</title><script src="/3.css"></script>你请求我干什么？我给你一个随机数'+Math.random())		
		
  }else if(request.url === '/3.css'){
		
    response.setHeader('Content-Type','application/javascript')
    response.end('var a = "Hi"; alert(a);')
		
  }

})

server.listen(port)
console.log('监听 1996 成功')
