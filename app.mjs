import 'dotenv/config';
import express from 'express';
// import { fileURLToPath } from 'url';
// import { dirname, join } from 'path';

//setup express app
const app = express();
const PORT = process.env.PORT || 3000;
const IP_ADD = process.env.IP_ADD;
app.use(express.json());


// const __filename = fileURLToPath(import.meta.url);
// const __dirname = dirname(__filename);
// app.use(express.static(join(__dirname, 'public')));

app.get('/', (req, res) => {
  res.send('Hello Express from CI/CD 😍😍.')
})

app.listen(PORT, () => {
  console.log(`Example app listening on port ${PORT}`)
})
