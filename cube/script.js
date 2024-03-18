const mainContainer = document.querySelector(".main-container");

for (let i = 0; i < 21; i++) { // Loop 5 times to create 5 copies
    const mainDiv = document.createElement("div"); // Create a new mainDiv for each iteration
    mainDiv.className = "mainDiv"; // Set class name for mainDiv
    
    const square = document.createElement("div");
    square.className = "square";
    const square2 = document.createElement("div");
    square2.className = "square2";
    const square3 = document.createElement("div");
    square3.className = "square3";
    
    mainDiv.append(square, square2, square3); // Append square, square2, and square3 to mainDiv
    
    mainContainer.appendChild(mainDiv); // Append mainDiv to mainContainer
    if(i%2 == 0){
        square.style.backgroundColor = "blue"
    }
    else{
        square2.style.backgroundColor = "green"
    }
}
