import express from 'express';
import bodyParser from 'body-parser';

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: true,
}));

app.get('/', (req, res) => {
  res.send('Hello World');
});

app.post('/login', (req, res) => {
  if (!req.body) {
    res.status(400).send('Bad Request');
    return;
  }

  if (req.body.email !== 'dogpoo@gmail.com' || req.body.password !== 'abcd1234') {
    res.status(401).send('Unauthorized');
    return;
  }

  res.send({
    id: 'vk94z0',
    email: 'dogpoo@gmail.com',
    name: '김개똥',
    age: 20,
  });
});

app.listen(3000, () => {
  console.log('Awesome TDD + ES6 app listening on port 3000!');
});

export default app;
