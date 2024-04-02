// Movies data
const moviesList = [
    { movieName: "Flash", price: 7 },
    { movieName: "Spiderman", price: 5 },
    { movieName: "Batman", price: 4 },
];

// DOM elements
const dropDownList = document.querySelector("#selectMovie");
const movieNameUpdate = document.querySelector("#movieName");
const moviePriceUpdate = document.querySelector("#moviePrice");
const seatCont = document.querySelectorAll("#seatCont .seat");
const seatSelected = document.querySelector("#selectedSeatsHolder");
const removeSpan = document.querySelector(".noSelected");
const incSeat = document.querySelector("#numberOfSeat");
const totalPrice = document.querySelector("#totalPrice");
const proceedBtn = document.querySelector("#proceedBtn");
const cancelBtn = document.querySelector("#cancelBtn");

// Selected seat count and total price
let convertIncSeat = 0;
let totalPriceValue = 0;

// Function to update movie details
function updateMovieDetails(selectedMovie) {
    movieNameUpdate.textContent = selectedMovie.movieName;
    moviePriceUpdate.textContent = "$ " + selectedMovie.price;
}

// Function to update total price
function updateTotalPrice(price) {
    totalPriceValue += price;
    totalPrice.textContent = "$ " + totalPriceValue;
}

// Function to update selected seat count
function updateSelectedSeatCount(increment) {
    convertIncSeat += increment;
    incSeat.textContent = convertIncSeat;
}

// Populate dropdown menu with movie names
moviesList.forEach(movie => {
    const option = document.createElement("option");
    option.textContent = movie.movieName + " $" + movie.price;
    option.value = movie.movieName;
    dropDownList.appendChild(option);
});

// Event listener for dropdown menu change
dropDownList.addEventListener("change", () => {
    const selectedMovieName = dropDownList.value;
    const selectedMovie = moviesList.find(movie => movie.movieName === selectedMovieName);
    if (selectedMovie) {
        updateMovieDetails(selectedMovie);
    }
});

// Event listener for seat selection
seatCont.forEach((seat, index) => {
    seat.addEventListener("click", () => {
        if (!seat.classList.contains("selected") && !seat.classList.contains("occupied")) {
            seat.classList.add("selected");
            updateSelectedSeatCount(1);
            const selectedMoviePrice = parseInt(moviePriceUpdate.textContent.replace(/[^\d.-]/g, ''));
            updateTotalPrice(selectedMoviePrice);
            removeSpan.remove();
            const selectedSeatBox = document.createElement("div");
            selectedSeatBox.className = "selectedSeat";
            selectedSeatBox.textContent = index + 1;
            seatSelected.appendChild(selectedSeatBox);
        } else {
            seat.classList.remove("selected");
            updateSelectedSeatCount(-1);
        }
    });
});

// Event listener for proceed button
proceedBtn.addEventListener("click", () => {
    if (convertIncSeat === 0) {
        alert("Oops, no seats selected!");
    } else {
        alert("Yay! Your seats have been booked.");
        seatCont.forEach(seat => {
            if (seat.classList.contains("selected")) {
                seat.classList.remove("selected");
                seat.classList.add("occupied");
                document.querySelector(".selectedSeat").remove();
            }
        });
        totalPriceValue = 0;
        convertIncSeat = 0;
        totalPrice.textContent = "$ " + totalPriceValue;
        incSeat.textContent = convertIncSeat;
        seatSelected.appendChild(removeSpan);
    }
});

// Event listener for cancel button
cancelBtn.addEventListener("click", () => {
    seatCont.forEach(seat => {
        if (seat.classList.contains("selected")) {
            seat.classList.remove("selected");
            document.querySelector(".selectedSeat").remove();
        }
    });
    totalPriceValue = 0;
    convertIncSeat = 0;
    totalPrice.textContent = "$ " + totalPriceValue;
    incSeat.textContent = convertIncSeat;
    seatSelected.appendChild(removeSpan);
});
