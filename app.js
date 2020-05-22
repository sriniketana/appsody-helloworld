const app = require('express')()

app.get('/', (req, res) => {
  res.send("Hello from Appsody! Will it work ? ");
});
 
module.exports.app = app;
