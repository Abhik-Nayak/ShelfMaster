const mongoose = require('mongoose');

mongoose
  .connect( `mongodb+srv://${process.env.MONGO_DB_USER}:${process.env.MONGO_DB_PASSWORD}@cluster0.8iiqxqw.mongodb.net/${process.env.MONGO_DB_DATBASE}?retryWrites=true&w=majority`, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
  })
  .then(() => {
    console.log('our db is connected');
  })
  .catch(err => console.log(err.message));
