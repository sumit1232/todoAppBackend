// backend/server.js
const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const connectDB = require('./config/db');
const todoRoutes = require('./routes/todoRoutes');

dotenv.config();
connectDB();

const app = express();

app.use(cors());
app.use(express.json());
app.use('/api/todos', todoRoutes);

// GET method route
app.get('/', (req, res) => {
    res.send('GET request to the homepage')
  })
  app.get('/login', (req, res) => {
    res.send('GET request to the login')
  })
  
  app.get('/register', (req, res) => {
    res.send('GET request to the register')
  })
  
  // POST method route
  app.post('/', (req, res) => {
    res.send('POST request to the homepage')
  })

  app.post('/contact', (req, res) => {
    res.send('POST request to the contact')
  })

  app.post('/user', (req, res) => {
    res.send('POST request to the user')
  })
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
