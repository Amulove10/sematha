const express = require('express');
const cors = require('cors');
const db = require('./config/db')
const router = require('./routes/displayroute')
const app = express();
const port = 1020


app.use(cors())
app.use(express.json())
app.use(express.urlencoded({extended:true}))

app.use('/api/project',router)
app.use('/api/blog/',router)
db.connect((err) => {
    if (!err) {
        console.log('database connected successfully');
        
    }
})
app.listen(port, () => {
    console.log('the server is listening');
})

