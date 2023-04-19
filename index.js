const express = require('express');
const app = express();
const category = require('./category.json');
const port = process.env.PORT || 5000;
const cors = require('cors')

app.use(cors())


app.get('/',(req,res) =>{
    res.send('data is comming');
})
app.get('/category',(req,res) => {
    res.send(category)
})
app.listen(port,() => {
    console.log(`app listning on port ${port}`);
})