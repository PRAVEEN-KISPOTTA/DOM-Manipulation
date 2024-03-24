//Create you project here from scratch
const moviesList = [
    { movieName: "Flash", price: 7 },
    { movieName: "Spiderman", price: 5 },
    { movieName: "Batman", price: 4 },
  ];
// Use moviesList array for displaing the Name in the dropdown menu
const dropDownList = document.querySelector("#selectMovie");

moviesList.forEach(movie=>{
    const option = document.createElement("option");
    option.innerHTML = movie.movieName
    option.value = movie.movieName;
    dropDownList.appendChild(option);
})
//Add eventLister to each unoccupied seat
//Add eventLsiter to continue Button
//Add eventListerner to Cancel Button