
function bmicalc(){
 var height = document.getElementById("floatingTextarea1").value; 
 var weight = document.getElementById("floatingTextarea2").value; 
 var bmicalc = weight /(height * height);
 bmicalc = bmicalc.toFixed(2)
  
    alert("your Bmi index is " + bmicalc);
}
