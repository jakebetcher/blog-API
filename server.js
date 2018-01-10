'use strict';

const express = require('express');
const bodyParser = require('body-parser');

const {BlogPosts} = require('./models');

const jsonParser = bodyParser.json();
const app = express();




BlogPosts.create('JavaScript Rocks', 'JavaScript is the future of programming and is better than all other languages', 'John Smith');
BlogPosts.create('JavaScript Sucks', 'JavaScript is the not the future of programming and is worse than all other languages', 'Jane Smith');

app.get('/blog-posts', (req, res) => {
  res.json(BlogPosts.get());
});






app.listen(process.env.PORT || 8080, () => console.log(
  `Your app is listening on port ${process.env.PORT || 8080}`));