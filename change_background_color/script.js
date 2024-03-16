function changeBackgroundColor(selector){
    //Implement your function here
    const changingColor = document.querySelectorAll(selector);

    console.log(changingColor);
    changingColor.forEach(tag=>{
        tag.style.backgroundColor = "yellow"
    })
}

changeBackgroundColor(".my-class");
changeBackgroundColor("#my-id");
changeBackgroundColor("button");