const express = require("express")
const bodyParser = require("body-parser")
const { people } = require("./const")

const app = express()
app.use(bodyParser.urlencoded({ extended: true }))

app.listen(9000, () => {
  console.log("We are live on " + 9000)
})

app.get("/people", (req, res) => {
  res.status(200)
  res.send(people)
})
