
const apiHandler = new APIhandler();

function getTopRatedMovies() {
  apiHandler
    .getTopRatedMovies()
    .then(data => console.log(data))
    .catch(err => console.log(err))
  
}

document.addEventListener('DOMContentLoaded', () => {

  console.log('IronGenerator JS imported successfully!');

}, false);


document.getElementById('btn-prueba').addEventListener('click', function (event) {
  
  getTopRatedMovies()
  
});
