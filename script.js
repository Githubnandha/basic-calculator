function displayValue(val){
    document.getElementById("input-box").value = document.getElementById("input-box").value + val;
}
function clearAll() {
    document.getElementById("input-box").value ="";
}
function backspace() {
    let value = document.getElementById("input-box").value;
    let newValue="";
    for(let i=0; i<value.length-1; i++) {
        newValue += value[i];
    }
    document.getElementById("input-box").value = newValue;
}
function changeSign() {
    let value = document.getElementById("input-box").value;
    document.getElementById("input-box").value = value*-1;
}
function percentage() {
   let value = document.getElementById("input-box").value;
   document.getElementById("input-box").value = value / 100;   
}
function calculation() {
    try {
       let userInput = document.getElementById("input-box").value;
       let result = eval(userInput);
       document.getElementById("input-box").value = result;
   }
   catch(error) {
       document.getElementById("input-box").value="Error";
   }
}
