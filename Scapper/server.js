//basically what this script does
// Find a unique element or attribute on the DOM that will help you single out the data you need
// If no unique element exists on the particular tag, find the closest tag that does and set that as your starting point
// If needed, traverse the DOM to get to the data you would like to extract

var express = require('express');
var fs = require('fs');
var request = require('request');
var cheerio = require('cheerio');

var app = express();

app.get('/scrape', function(request, respond) {

  url = 'http://www.imdb.com/title/tt1229340/';

  request(url, function(error, response, html) {

    if (!error) {
      var $ = cheerio.load(html);
      var title, release, rating;
      var json = { title: "", release: "", rating: ""};

      $('.header').filter(function() {
        var data = $(this); // store the data we filter into a variable so we can easily see what's going on.

        title = data.children().first().text();
        release = data.children().last().children().text();

        json.title = title;
        json.release = release;
      })

      $('.star-box-giga-star').filter(function() {
        var data = $(this);

        rating = data.text();

        json.rating = rating;
      })
    }

    //write the result to json file
    fs.writeFile('output.json', JSON.stringify(json, null, 4), function(err) {
      console.log("File successfully written!");
    })

    response.send("check your console!");
  });
});

app.listen('8081');
console.log('shits happening on port 8081');

exports = module.exports = app;
