import 'dotenv/config';
import routerProduct from './routes/product.js';
import path from 'path';
import express from 'express';
import errorHandler from './helpers/errorHandler.js';
import bodyParser from 'body-parser';

const app = express();
const { PORT: port } = process.env;

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));

// parse application/json
app.use(bodyParser.json());

app.use('/static', express.static(path.join(process.cwd(), '/src/public')));

app.use('/api/products', routerProduct);

app.use(errorHandler);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
