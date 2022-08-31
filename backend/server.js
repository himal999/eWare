import express from 'express';
const app = express();

const PORT = 6000;

app.get('/', (req, res) => {
  res.send('accepted..');
});

app.listen(PORT, () => {
  console.log('server running....');
});
