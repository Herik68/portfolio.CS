
const decreaseBtn = document.getElementById("dec")
const resetBtn = document.getElementById("re")
const increaseBtn = document.getElementById("inc")
const countlabel = document.getElementById("countlabel")
let count=0;
increaseBtn.onclick=function(){
    count++;
    countlabel.textContent = count;
}
decreaseBtn.onclick=function(){
    count--;
    countlabel.textContent = count;
}
resetBtn.onclick=function(){
    count = 0;
    countlabel.textContent = count;
}