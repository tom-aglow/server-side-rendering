import 'babel-polyfill';
import express from 'express';
import {matchRoutes} from 'react-router-config';

import renderer from './helpers/renderer';
import createStore from './helpers/createStore';
import routes from './client/routes';

const app = express();

app.use(express.static('public'));

app.get('*', ({path}, res) => {
  const store = createStore();

  matchRoutes(routes, path);

  res.send(renderer(path, store));
});

//  SERVER SETUP

app.listen(3000, () => {
  console.log('listening on port 3000');
});
