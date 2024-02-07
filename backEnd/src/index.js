const express = require('express');
const app = express();
const PORT = process.env.PORT||5000;
const bodyParser = require('body-parser')
const userRoutes = require('./routes/userRoute')

app.use(bodyParser.json())
app.listen(PORT,()=>{
    console.log(`Server is running on ${PORT}`)
})

app.use('/api/user',userRoutes)