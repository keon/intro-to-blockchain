const express = require('express')
const bodyParser = require('body-parser')
const app = express()

app.use(bodyParser.json());       // to support JSON-encoded bodies
app.use(bodyParser.urlencoded({extended:true}));   // to support URL-encoded bodies


let BALANCES = {
  'ryan': 100,
  'keon': 10000,
}

app.get('/balance', (req, res) => {
  const name = req.query.user.toLowerCase();
  const balance = BALANCES[name];

  const msg = `Balance for ${name}: ${balance}`;
  console.log(msg);
  res.send(msg);
})

app.post('/user', (req, res) => {
  const name = req.body.user.toLowerCase();
  BALANCES[name] = 0;
  const msg = `Created account for ${name}`
  console.log(msg);
  res.send(msg);
});

app.post('/transfer', (req, res) => {
  const {from, to, amount} = req.body;
  BALANCES[from] -= amount;
  BALANCES[to] += amount;
  const msg = `Transferred ${amount} from ${from} to ${to}`;
  console.log(msg);
  res.send(msg);
})

app.listen(3000, () => {
  console.log('Server is running on port 3000!')
})
