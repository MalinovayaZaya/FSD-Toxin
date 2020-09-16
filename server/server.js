const path = require('path');
const express = require('express');
const ejsRender = require('./utils/ejsRender');
// const controllers = require('./server.controllers');

const app = express();

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, '/views'));

app.use('/public', express.static(path.join(__dirname, '/public')));

const routing = require('./routing.json');

for (const route of routing) {
  app.get(`${route.path}`, (req, res) => {
    if (route.page) {
      const { title, description, body, head } = route.page;
      
      res.render('index', {
        isContentRendered: false,
        title,
        description,
        headCustomContent: head,
        content: body,
      });
    }

    // if (route.controller) {
    //   const controller = new controllers[route.controller]();
    //   controller.render({
    //     params: req.params,
    //     query: req.query,
    //     body: req.body,
    //   }).then(({ title, head, body }) => {
    //     res.render('index', {
    //       isContentRendered: true,
    //       title,
    //       content: body,
    //       headCustomContent: head,
    //     });
    //   }).catch((error) => {
    //     res.send('404');
    //   });
    // }
  });
}

app.listen(3000);
