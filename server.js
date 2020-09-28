const express = require('express');

const projectRouter = require('./projectRouter');

const server = express();

server.use(express.json());
server.use('/project', projectRouter);

module.exports = server;