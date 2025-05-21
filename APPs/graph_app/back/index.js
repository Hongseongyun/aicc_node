const PORT = 8000;

const express = require('express');
const cors = require('cors');

const app = express();
app.use(express.json());
app.use(cors());

app.get('/', (request, response) => {
  response.send('Hello World 12');
});

app.use(require('./routes/getRoutes'));

app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));
