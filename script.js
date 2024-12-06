const temp =document.getElementById("temp");
const tofarenheit=document.getElementById("tofarenheit");
const tocelsius=document.getElementById("tocelcius");
const hot=document.getElementById("hot");
const cold=document.getElementById("cold");
const normal=document.getElementById("normal");

let T= Number(temp.value)
function convert(){
    hot.style.display='none';
    cold.style.display='none';
    normal.style.display='none';
    if(temp.value=="" || isNaN(Number(temp.value))){
        window.alert("please enter a temperature value first")

    }
    else if(!tocelsius.checked && !tofarenheit.checked){
        window.alert("please select a conversion system first")

    }
    else{
        if(tocelsius.checked){
            
            ANSWER=(T-32)*(5/9);
            // console.log("Converted to Celsius (ANSWER):", ANSWER);
            document.getElementById(Cgif(ANSWER)).style.display="block";
            document.getElementById("ANSWER").textContent= ANSWER.toFixed(2) + "°C";



        }
        if(tofarenheit.checked){
            
            ANSWER=(T*(9/5))+32;
            // console.log("Converted to Farnehiet (ANSWER):", ANSWER);
            document.getElementById(Fgif(ANSWER)).style.display="block";
            document.getElementById("ANSWER").textContent= ANSWER.toFixed(2) + "°F";


        }
        
    }


}
function Cgif(t){
    if(t>=40){
        return "hot";}
    if(t<=20){
        return "cold";}
    else{
        return "normal";
    }
}

function Fgif(t){
    if(t>=104){
        return "hot";}
    if(t<=68){
        return "cold";}
    else{
        return "normal";
    }
}



    
const convertButton = document.getElementById("convertButton");
convertButton.addEventListener("click", convert);



