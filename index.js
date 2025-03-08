let x=Math.floor(Math.random()*6);
if(x===0){
    document.querySelector(".img1").setAttribute("src","./images/dice1.png");
}
else if(x===1){
    document.querySelector(".img1").setAttribute("src","./images/dice2.png");
}
else if(x===2){
    document.querySelector(".img1").setAttribute("src","./images/dice3.png");
}
else if(x===3){
    document.querySelector(".img1").setAttribute("src","./images/dice4.png");
}
else if(x===4){
    document.querySelector(".img1").setAttribute("src","./images/dice5.png");
}

let x1=Math.floor(Math.random()*6);
if(x1===0){
    document.querySelector(".img2").setAttribute("src","./images/dice1.png");
}
else if(x1===1){
    document.querySelector(".img2").setAttribute("src","./images/dice2.png");
}
else if(x1===2){
    document.querySelector(".img2").setAttribute("src","./images/dice3.png");
}
else if(x1===3){
    document.querySelector(".img2").setAttribute("src","./images/dice4.png");
}
else if(x1===4){
    document.querySelector(".img2").setAttribute("src","./images/dice5.png");
}
if(x>x1){
    document.querySelector("h1").textContent="Player 1 wins";
}
else if(x1>x){
    document.querySelector("h1").textContent="Player 2 wins";
}
else{
    document.querySelector("h1").textContent="Draw";

}