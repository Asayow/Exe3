const http = require('http');
const url = require('url');
const members = require('./members.js');
const users = require('../users.js');

const server = http.createServer((req, res) => {
  const parsedUrl = url.parse(req.url, true);

  if (parsedUrl.pathname === '/') {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end('This is the home page');
  } else if (parsedUrl.pathname === '/about') {
    const data = {
      Status: 'success',
      Message: 'response success',
      Description: 'Exercise #03',
      Date: new Date().toISOString(),
      Data: members
    };
    res.writeHead(200, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify(data));
  } else if (parsedUrl.pathname === '/users') {
    res.writeHead(200, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify(users));
  } else {
    res.writeHead(404, { 'Content-Type': 'text/plain' });
    res.end('404 Not Found');
  }
});

const port = 3000;
server.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
