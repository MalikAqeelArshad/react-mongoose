import express from 'express';
import mongoose from 'mongoose';
import jobs from './routes/jobs.js';
import {notFound, errorHandler} from './middleware/error.js';
import getRoutes from './middleware/routes.js';

const port = process.env.PORT || 8000;
const app = express();

// MongoDB connection
mongoose.connect(process.env.MONGODB_URI)
  .then(() => console.log('MongoDB Connected!'))
  .catch((error) => console.log(error.message));

// Body parser middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  next();
});

// Routes
app.use('/jobs', jobs);

app.get("/", (req, res, next) => res.send(getRoutes(app, req, res, next)));

// Error handler
app.use(notFound);
app.use(errorHandler);

app.listen(port, () => console.log(`Server is running on port ${port}`));
// export default app;