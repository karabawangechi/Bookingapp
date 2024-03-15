import mongoose from 'mongoose';
import app from './express.js';

const url = '';

mongoose.set('strictQuery', false);
mongoose
  .connect(url)
  .then(() => {
    console.log('Database connected');
    const port = process.env.PORT || 8000;

    app.listen(port, () => {
      console.log(`API listening on http://localhost:${port}`);
    });
  })
  .catch((err) => console.log(err));

