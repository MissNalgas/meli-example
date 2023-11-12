const dev = process.env.NODE_ENV !== 'production'
const port = process.env.PORT || 3000;

const express = require('express');
const next = require('next');
const router = require('./routes');

const nextApp = next({dev});
const handle = nextApp.getRequestHandler();

nextApp.prepare().then(() => {

  const app = express();

  app.use('/api', router);

  app.use((req, res) => {
    return handle(req, res)
  });

  app.listen(port, () => {
    console.log(`Listening to port: ${port}`);
  })
});
