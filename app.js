var express = require('express');
app = express();

app.set('view engine', 'ejs')


app.get('/', function(req, res) {
  res.send("Let's Calculate!");
})
app.get('/:operator/:x/:y', function(req, res) {
  var operators = { add: '+',
                    sub: '-',
                    mult: '*',
                    div: '/'
                  }
  var operator = operators[req.params.operator];
  var problem = req.params.x +' '+operator +' '+ req.params.y;
  var answer = eval(req.params.x + operator + req.params.y);

  res.send(`${problem} = ${answer}`)
})

app.listen(3000, function() {
  console.log('starting server on localhost:3000');
});
