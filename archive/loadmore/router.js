// 服务端 router.js


app.get('/loadMore', function(req, res) {

  var curIdx = req.query.index
  var len = req.query.length
  var data = []

  for(var i = 0; i < len; i++) {
    data.push('新闻' + (parseInt(curIdx) + i))
  }

  //res.send(data);
  //模拟慢网速
  setTimeout(function(){
    res.send(data);
  }, 2000)
  
});
