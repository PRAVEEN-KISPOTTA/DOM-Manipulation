const btn = document.createElement("button");
const Div = document.createElement("div");
btn.id = "btnId";
btn.className = "btnClass";
btn.textContent = "Click Here";

const heading = document.querySelector("h2");
const mainDiv = document.querySelector(".mainDiv");
mainDiv.appendChild(Div);
Div.appendChild(btn);


//remove heading
function removeH(){
    heading.remove();
}

btn.addEventListener("click", removeH);