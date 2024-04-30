const express = require('express');
const app = express();


const userRoute = require('./route/userRoutes');
app.use((req, res, next) => {
    console.log('Hello from the middleware 👋');
    next();
  });

app.use('/user',userRoute);


app.listen('3000',(req,res,next) => {
    console.log('Application running on port 3000');
})