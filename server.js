require('dotenv').config();
const express = require('express');
const cors = require('cors');
const tourRoutes = require('./routes/tourRoutes');
const userRoutes = require('./routes/userRoutes'); 
const logger = require('./middlewares/logger');
const errorHandler = require('./middlewares/errorHandler');

const app = express();
app.use(express.json());
app.use(cors());
app.use(logger);

app.use('/api/tours', tourRoutes);
app.use('/api/users', userRoutes); 

app.use(errorHandler);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`✅ Server running on port ${PORT}`));