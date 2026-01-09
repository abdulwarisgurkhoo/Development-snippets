
let btn=document.querySelector('#btn');

btn.addEventListener("click",()=>
{
    let color=randomColor();
    let para=document.querySelector('#p');
    let div=document.querySelector("div");
    
     para.style.color=color;
     div.style.backgroundColor=color;
      
});
function randomColor()
{
    let r=Math.floor(Math.random()*255)+10;
     let g=Math.floor(Math.random()*255)+10;
     let b=Math.floor(Math.random()*255)+10;
    let rcolor=`rgb(${r},${g},${b})`;
    return rcolor;
}
