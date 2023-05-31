const movieTitleRef = document.getElementById("movie-title");
const searchBtn = document.getElementById("searchBtn");
const result = document.getElementById("result");

let getMovie = () => {
    let movieTitle = movieTitleRef.value; 
    let url =`http://www.omdbapi.com/?t=${movieTitle}& apikey=${key}`;

    if (movieTitle.lenght <= 0) {
        result.innerHTML = `<p class="msg">Please Enter Movie Title</p>`;

    } else {
        fetch(url)
          .then(resp => resp.json())
          .then((data) => {
              if(data.Response = 'true'){
                  result.innerHTML = `
                  <div class="movieInfo">
                      <img src=${data.Poster} class="Poster">
                      <div>
                          <h3>${data.title}</h3>
                          <div class="rating">
                              <i class="fa-solid fa-star"></i>
                              <i class="fa-solid fa-star"></i>
                              <i class="fa-solid fa-star"></i>
                              <h2>${data.imdRating}</h2>
                          </div>
                          <div class="details">
                              <p>${data.Rated}</p>
                              <p>${data.Year}</p>
                              <p>${data.Runtime}</p>
                          </div>
                          <div class="genre">
                              <div>${data.Genre.split(",").join("<div></div>")}</div>
                          </div>
                      </div>
                  </div>`;
              }else{
                  result.innerHTML = `<p class='msg'>${data.Error}</p>`;
              }
          })
    }
};

searchBtn.addEventListener("click", getMovie)
window.addEventListener("load", getMovie);
