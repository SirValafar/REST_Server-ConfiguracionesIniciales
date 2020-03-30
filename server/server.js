const express = require('express');
const app = express();
const bodyParser = require('body-parser')
const port = 3000;

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));

// parse application/json
app.use(bodyParser.json());


app.get('/usuario', function (req, res) {
  res.json('get usuario')
});
 
app.post('/usuario', function (req, res) {

    let body = req.body;

    res.json({
        persona: body
    })
  });

app.put('/usuario/:id', function (req, res) {
    let usuarioId = req.params.id;
    res.json({
        id: usuarioId
    })
  });

app.delete('/usuario', function (req, res) {
    res.json('delete usuario')
  });

app.listen(port, () => {
    console.log(`Escuchado puerto: ${port} `);
});