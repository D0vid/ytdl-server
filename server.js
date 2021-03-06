const express = require('express');
const cors = require('cors');
const ytdl = require('ytdl-core');
const app = express();

app.use(cors());

app.listen(4000, () => {
    console.log('Server running at port 4000');
});

app.get('/download', (req,res) => {
  var URL = req.query.URL;
  var title = req.query.title;
  res.header('Content-Disposition', `attachment; filename="${title}.mp3"`);
  ytdl(URL, {
    format: 'mp3'
  }).pipe(res);
});

app.get('/hello', (req,res) => {
  res.send("Hello world!");
});