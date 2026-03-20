import express from 'express'
import userRouter from './routes/user.routes.js';
import dashboardRoutes from './routes/dashboard.routes.js';
import ApiError from './utils/apiError.js';
import errorHandler from './middleware/errorMiddleware.js';
const app = express();

app.use(express.json());

// Test root route
app.get('/', (req, res) => {
  res.status(200).json({ message: 'Welcome to the User Management API!' });
});

app.use('/api/v1/users', userRouter);
// app.use('/api/v1/dashboard', dashboardRoutes);

// Handle 404 Not Found
app.use((req, res, next) => {
  next(new ApiError(404, 'Resource not found'));
});

app.use(errorHandler);
export default app;
