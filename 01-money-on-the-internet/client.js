var axios = require('axios');

let getBalance = (user) => {
  axios.get('http://localhost:3000/balance', {
      params: {user: user}
    })
    .then(function (res) {
      console.log(res.data);
    })
    .catch(function (error) {
      console.log(error);
    });
}

let createUser = (user) => {
  axios.post('http://localhost:3000/user', {
      user: user,
    })
    .then(function (res) {
      console.log(res.data);
    })
    .catch(function (error) {
      console.log(error);
    });
}

let transfer = (from, to, amount) => {
  axios.post('http://localhost:3000/transfer', {
      from: from,
      to: to,
      amount: amount,
    })
    .then(function (res) {
      console.log(res.data);
    })
    .catch(function (error) {
      console.log(error);
    });
}

createUser("martin")
getBalance("keon");
getBalance("martin");

transfer("keon", "martin", 100);
getBalance("keon");
getBalance("martin");

transfer("keon", "martin", 100);
getBalance("keon");
getBalance("martin");

transfer("keon", "martin", 100);
getBalance("keon");
getBalance("martin");
