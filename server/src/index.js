import express from 'express';
import React from 'react';
import { renderToString } from 'react-dom/server';

import Home from './client/components/Home.jsx';

const app = express();

app.get('/', (req, res) => {
  const content = renderToString(<Home />);

  res.send(content);
});

//  SERVER SETUP

app.listen(3000, () => {
  console.log('listening on port 3000');
});
