const express = require('express');
const cors = require('cors');
const path = require('path');

const authRouter = require('./routes/authRoutes');

require('dotenv').config();

const PORT = process.env.PORT || 8000;

const app = express();
app.use(cors());
app.use(express.json());

app.use('/public', express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) => {
  res.send('Auth API Backend Running');
});

app.use('/auth', authRouter);

app.listen(PORT, () => {
  console.log('Server is running on port', PORT);
});
