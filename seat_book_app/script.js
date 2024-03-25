//Create you project here from scratch
const moviesList = [
    { movieName: "Flash", price: 7 },
    { movieName: "Spiderman", price: 5 },
    { movieName: "Batman", price: 4 },
  ];
// Use moviesList array for displaing the Name in the dropdown menu
const dropDownList = document.querySelector("#selectMovie");
const movieNameUpdate = document.querySelector("#movieName");
const moviePriceUpdate = document.querySelector("#moviePrice");

moviesList.forEach(movie=>{
    const option = document.createElement("option");
    option.innerHTML = movie.movieName + " $"+ movie.price
    option.value = movie.movieName;
    dropDownList.appendChild(option);
});

console.log(dropDownList[2].value)
dropDownList.addEventListener("change", ()=>{
    const selectMovieName = dropDownList.value;
    console.log(selectMovieName);
    const selectedMovie = moviesList.find((movie)=>movie.movieName === selectMovieName);

    if(selectedMovie){
        movieNameUpdate.textContent = selectedMovie.movieName;
        moviePriceUpdate.textContent = "$ " + selectedMovie.price;
    }

    console.log(selectedMovie);
});
//Add eventLister to each unoccupied seat
const seatCont = document.querySelectorAll("#seatCont .seat");
const unOccupied = Array.from(seatCont).filter(seat=> !seat.classList.contains("occupied"));
console.log(unOccupied)

unOccupied.forEach(seats=>{
    seats.addEventListener("click", ()=>{
        if(!seats.classList.contains("selected")){
            seats.classList.add("selected")
        }
        else{
            seats.classList.remove("selected");
        }
    })
})
//Add eventLsiter to continue Button
//Add eventListerner to Cancel Button