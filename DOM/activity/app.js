
let btn=document.querySelector("button");
btn.addEventListener("click",function () {
    let h3=document.querySelector("h3");
    let rand=  randomcolor();
    h3.innerText=rand;
    let  div=document.querySelector("div");
    div.style.backgroundColor=rand;

});



function randomcolor(){
    let red=Math.floor(Math.random()*255);
    let green=Math.floor(Math.random()*255);
    let blue=Math.floor(Math.random()*255);

    let color=`rgb(${red},${green},${blue})`;
    return color;



}