#!/usr/bin/yarn dev
/**
 * Express Js Server
 */

import express from 'express';
import routes from './routes/index'; 

const server = express();

server.use(express.json());

server.use(routes);

const PORT = process.env.PORT || 5000;

// Start the server
server.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

export default server
