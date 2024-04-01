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
let storeUpdateName = "";
let storeUpdatePrice = 7;

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
        storeUpdateName = selectedMovie.movieName;
        storeUpdatePrice = parseInt(selectedMovie.price);
        movieNameUpdate.textContent = selectedMovie.movieName;
        moviePriceUpdate.textContent = "$ " + selectedMovie.price;
    }
});
//Add eventLister to each unoccupied seat
const seatCont = document.querySelectorAll("#seatCont .seat");
const seatSelected = document.querySelector("#selectedSeatsHolder");
const removeSpan = document.querySelector(".noSelected");
const incSeat = document.querySelector("#numberOfSeat");
let convertIncSeat = parseInt(incSeat.textContent);
const totalPrice = document.querySelector("#totalPrice");

console.log(storeUpdatePrice);

// const unOccupied = Array.from(seatCont).filter(seat=> !seat.classList.contains("occupied"));
// console.log(unOccupied)

seatCont.forEach((seats, index)=>{

    // select or deselect seats from display
    seats.addEventListener("click", ()=>{
        const seatSelectedBox = document.createElement("div");
        if(!seats.classList.contains("selected") && !seats.classList.contains("occupied")){
            seats.classList.add("selected");
            
            //increament number of seat in display
            convertIncSeat += 1;
            console.log("convert", convertIncSeat)
            incSeat.textContent = convertIncSeat;

            //adding price of all selected seats
            const getTextOfPrice = totalPrice.textContent;
            const numericStr = getTextOfPrice.replace(/[^\d.-]/g, ''); // Remove non-numeric characters (including spaces and currency symbols)
            let convertPrice = parseInt(numericStr);
            convertPrice += storeUpdatePrice;
            totalPrice.textContent = "$ " + convertPrice;
            console.log(typeof(numericStr))

            //remove No Seat Selected 'sapn' tag
            removeSpan.remove();

            seatSelectedBox.className = "selectedSeat";
            seatSelectedBox.textContent = index+1;

            seatSelected.appendChild(seatSelectedBox);
            console.log("index-", index+1)

        }
        else{
            //this is for remove seats from display
            seats.classList.remove("selected");
        }
    })
})


//Add eventLsiter to continue Button
const selectedSeat = document.querySelectorAll("#selectedSeatsHolder .selectedSeat")
const proceedBtn = document.querySelector("#proceedBtn");
proceedBtn.addEventListener("click", ()=>{
    if(convertIncSeat == 0){
        alert("Oops no seat Selected");
    }
    else{
        alert("Yayy! Your Seats have been booked");
        seatCont.forEach((seat)=>{
            console.log(seat.classList.contains("selected"))
            if(seat.classList.contains("selected")){
                seat.classList.remove("selected")
                seat.classList.add("occupied");
                document.querySelector(".selectedSeat").remove() //remove selected seats from cart
                seatSelected.appendChild(removeSpan);
                totalPrice.textContent = "$ " + 0; // remove total calculated price
                incSeat.textContent = 0; //remove total calculated seats
                
            }
            // console.log(selectedSeat)

        })
    }

})

//Add eventListerner to Cancel Button