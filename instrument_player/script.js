// Create eventListener to all the button 
// All button should be able to play a different sound.
const track = document.querySelectorAll(".drum");
for(let i = 0; i<track.length; i++){
    track[i].addEventListener("click", ()=>{
        makeSound(track[i].innerHTML);
    })
}

document.addEventListener("keypress", (event)=>{
    makeSound(event.key);
})

function makeSound(key){
    switch(key){
        case 'w':
            let track1 = new Audio("https://files.codingninjas.in/tom-1-28537.mp3");
            track1.play();
            break;
            
        case 'a':
            let track2 = new Audio("https://files.codingninjas.in/tom-2-28541.mp3");
            track2.play();
            break;
            
            case 's':
            let track3 = new Audio("https://files.codingninjas.in/tom-3-28542.mp3");
            track3.play();
            break;
            
        case 'd':
            let track4 = new Audio("https://files.codingninjas.in/tom-4-28543.mp3");
            track4.play();
            break;
            
            case 'j':
            let track5 = new Audio("https://files.codingninjas.in/snare-28545.mp3");
            track5.play();
            break;
            
        case 'k':
            let track6 = new Audio("https://files.codingninjas.in/crash-28546.mp3");
            track6.play();
            break;
            
            case 'l':
            let track7 = new Audio("https://files.codingninjas.in/kick-bass-28547.mp3");
            track7.play();
            break;
    }
}
