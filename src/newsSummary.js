var newsfeed = document.getElementById('news-feed');
var getNews = document.getElementById('get-news');

getNews.addEventListener('click', function() {
  var ourRequest = new XMLHttpRequest();
  ourRequest.open('GET', 'https://content.guardianapis.com/search?api-key=test&show-fields=all');
  ourRequest.onload = function() {
    var ourData = JSON.parse(ourRequest.responseText);
    renderHTML(ourData);
  };
  ourRequest.send();
});

function renderHTML(data) {
 var htmlString = '';
 // var image = "<img src= data.response.results[i].webUrl   />"
 for (i = 0; i < 5; i++) {
   htmlString += '<li><a href= ' + data.response.results[i].webUrl + '>'+ data.response.results[i].webTitle +'</a></li>' + '<img src=' + data.response.results[i].fields.thumbnail + '>'

 }
 newsfeed.innerHTML = htmlString;
}

function resetCounter() {
  counter = 0
}

getNews.click();
