const express = require('express');
const cors = require('cors');
const app = express();
const cats = require('./db/db.json');

app.use(cors()); // handle cross origin requests
app.use(express.static('public')); // expose data of public folder

/**
 * default path - returns all cats
 */
app.get('/', (req, res) => {
  res.json(cats);
});

/**
 * search path - returns filtered cats based on user keyword
 */
app.get('/search', (req, res) => {
  const keyword = req.query.q;
  const result = cats.filter(cat => cat.name.toLowerCase().includes(keyword.toLowerCase()))
  res.json(result);
});

/**
 * start app on port 3001
 */
app.listen(3001, () => {
  console.log(`Server started on http://localhost:3001`);
})















