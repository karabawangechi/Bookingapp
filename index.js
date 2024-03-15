import mongoose from 'mongoose';
import app from './express.js';

const url = 'mongodb+srv://paulotieno2:vzS0PqYiRk04IcN0@cluster0.g7hixbe.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0';

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

