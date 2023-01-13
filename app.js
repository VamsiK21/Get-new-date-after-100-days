const addDays = require("date-fns/addDays");
const result = addDays(new Date(), 100);
console.log(result);

const express = require("express");
const app = express();

app.get("/", (request, response) => {
  response.send(
    `${result.getDate()}/${result.getMonth() + 1}/${result.getFullYear()}`
  );
});

module.exports = app;
app.listen(3000);
