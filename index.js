import express from 'express';
import cors from 'cors';
const app = express();
import {router} from './routes.js'

app.use(cors('*'))
app.use(express.json())

app.get('/', (request, response) => {
  response.send('welcome to the my APIs')
})


app.use('/emp', router);

app.listen(4000, '0.0.0.0', () => {
  console.log('server started on port 4000')
})