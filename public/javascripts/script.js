
const apiHandler = new APIhandler();

// function topRatedMovies() {
  
//   apiHandler
//     .getTopRatedMovies()
//     .then(data => console.log(data.data.results))
//   //   .catch(err => console.log(err))
  
// }

document.addEventListener('DOMContentLoaded', () => {

  console.log('IronGenerator JS imported successfully!');
 

}, false);


document.getElementById('btn-prueba').addEventListener('click', function (event) {
  
  apiHandler
    .getTopRatedMovies()
    .then(data => {
      const dataArr = data.data.results
      console.log(dataArr)
      dataArr.forEach(elm => {
        const htmltext = `<div class="card" style="width: 14rem; margin: 25px;">
                                  <img class="card-img-top" src='https://image.tmdb.org/t/p/w300${elm.poster_path}' alt="serie image cap"
                                      style="object-fit: cover; width: 100%;">
                                  <div class="card-body" style="text-align: center">
                                      <h5 class="card-title">${elm.title}</h5>
                                      <a href="/movies/${elm.id}" class="btn btn-info btn-block">Details</a>  
                                  </div>
                              </div>`
        document.getElementById('movies-container').innerHTML += htmltext
      })
    })
    .catch(err => console.log(err))
  
});


