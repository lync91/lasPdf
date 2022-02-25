import path from 'path';
import {fileURLToPath} from 'url';
import express from 'express';
const app = express();
import http from'http';
const server = http.createServer(app);
import { Server } from 'socket.io';
const io = new Server(server);

//db
import db from "./db/db.mjs";
import { mock } from "./db/mock.mjs";
import User from "./db/models/user.mjs";

const __filename = fileURLToPath(import.meta.url);

const __dirname = path.dirname(__filename);

app.use('/js', express.static('js'))

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html');
});

app.get('/test', (req, res) => {
  const user = new User;
  user.test();
  res.send('OK')
})
app.get('/mock', (req, res) => {
  mock();
  res.send("OK")
})

io.on('connection', (socket) => {
  console.log('a user connected');
});

server.listen(3000, () => {
  console.log('listening on *:3000');
});