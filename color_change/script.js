const input = document.querySelector("input");
const clickBtn = document.querySelector("button");
const box = document.querySelector(".box");

function addItem(){
    console.log(input.value);
    box.style.backgroundColor = `${input.value}`
    input.value = "";
}

clickBtn.addEventListener("click", addItem);