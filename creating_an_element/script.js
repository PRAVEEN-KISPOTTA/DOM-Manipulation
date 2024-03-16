const btn = document.createElement("button");
const Div = document.createElement("div");
btn.id = "btnId";
btn.className = "btnClass";
btn.textContent = "Click Here";

const heading = document.querySelector("h2");
heading.appendChild(Div)
Div.appendChild(btn);
