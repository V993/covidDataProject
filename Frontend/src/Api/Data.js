//Basic fetch request
//the first then is telling us what data we expect as a response
//the second then is an arrow function which logs the data
fetch('http://example.com/movies.json')
  .then(response => response.json())
  .then(data => console.log(data));
