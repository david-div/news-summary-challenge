var newsfeed = document.getElementById('news-feed');
var getNews = document.getElementById('get-news');

getNews.addEventListener('click', function() {
  var ourRequest = new XMLHttpRequest();
  ourRequest.open('GET', 'https://content.guardianapis.com/');
  ourRequest.onload = function() {
    var ourData = JSON.parse(ourRequest.responseText);
    renderHTML(ourData);
  };
  ourRequest.send();
});

function renderHTML(data) {
 var htmlString = '';
 for (i = 0; i < 5; i++) {
   htmlString += '<li><a href= ' + data.response.results[i].webUrl + '>'+ data.response.results[i].webTitle +'</a></li>'
 }
 newsfeed.innerHTML = htmlString;
}

function resetCounter() {
  counter = 0
}

getNews.click();
