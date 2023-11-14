const express = require('express');
require('dotenv').config();
require('./models/db');
const cors = require('cors');
const userRouter = require('./routes/user');
const todoRouter = require('./routes/todo');


const app = express();


app.use(cors());
app.use(express.json());
app.use(userRouter);
app.use(todoRouter);

app.get('/test', (req, res) => {
  res.send('Hello world');
});

app.get('/', (req, res) => {
  res.json({ success: true, message: 'Welcome to backend zone!' });
});

app.listen(8001, () => {
  console.log('port is listening');
});
