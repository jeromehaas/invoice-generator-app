const express =  require('express');
const app = express();
const cors = require('cors');
app.use(cors());

app.post('/download', (req, res) => {
  const file = `${__dirname}/readme2.txt`;
  res.download(file);
  // res.send('here is your file')
});

app.listen(3003, () => {
  console.log('Server is up and running on port 3003');
});

