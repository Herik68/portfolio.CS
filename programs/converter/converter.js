const celcius= document.getElementById("toC");
const farenheit= document.getElementById("toF");
const submit=document.getElementById("convert");
const result =document.getElementById("result");
const textbox = document.getElementById("degree")
let temp;
function convert(){
    if(celcius.checked){
        temp= Number(textbox.value);
        temp=(temp-32)*(5/9);
        result.textContent=temp.toFixed(1)+"°F";
    }
    else if(farenheit.checked){
        temp= Number(textbox.value);
        temp=temp * 9/5 +32;
        result.textContent=temp.toFixed(1)+"°C";
    }
    else{
        result.textContent="Select an unit";
    }
}