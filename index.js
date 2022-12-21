const express = require('express')
const app = express();
var cors = require('cors');
const port =process.env.PORT || 5000;

app.use(cors());
const categories=require("./data/categories.json");
const details=require("./data/details.json");


app.get('/allCategories', (req, res) => {
  res.send(categories)
})

app.get('/details/:id', (req, res) => {
    const id=req.params.id;
    const selectedCourse=details.find(detail=>detail.id===id);
    res.send(selectedCourse);
  })

  app.get('/categories', (req, res) => {
    const category=details.slice(0, 3)
    console.log(category)
    res.send(category)
  })

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})