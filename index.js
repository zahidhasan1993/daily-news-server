const express = require("express");
const app = express();
const category = require("./category.json");
const news = require("./news.json");
const port = process.env.PORT || 5000;
const cors = require("cors");

app.use(cors());

app.get("/", (req, res) => {
  res.send("data is comming");
});
app.get("/news", (req, res) => {
  res.send(news);
  console.log(req);
});
app.get("/news/:id", (req, res) => {
  const id = req.params.id;

  const newData = news.find((singleNews) => singleNews._id === id);

  res.send(newData);
});
app.get("/category", (req, res) => {
  res.send(category);
});
app.get('/category/:id', (req ,res) => {
  const id = Number(req.params.id);
  const newData = news.filter(singleNews => Number(singleNews.category_id) === id) 
  if (id === 0) {
    res.send(news)
    
  }else{
    res.send(newData)
  }
})
app.listen(port, () => {
  console.log(`app listning on port ${port}`);
});
