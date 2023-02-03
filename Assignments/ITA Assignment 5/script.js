/*-------------------------------- the version below can be used when bttn "calculate" is present on webpage-------
var a = parseFloat(document.getElementById('input1').value);
var b = parseFloat(document.getElementById('input2').value);
var operator = document.getElementById('operator').value;
var result;

document.getElementById("calculate").addEventListener("click", function() { //when button is present in HTML 
if (operator == '+') {
  result = a + b;
} else if (operator == '-') {
  result = a - b;
} else if (operator == '*') {
  result = a * b;
} else if (operator == '/') {
  result = a / b;
}

document.getElementById("output").innerHTML = result; //for paragraph
});


/*-----------------------The version below can be used when the button is missing and we want an automatic update whenever the number is inserted*------------*/

document.getElementById('input1').addEventListener('input', function(){
    calculate();
});
document.getElementById('input2').addEventListener('input', function(){
    calculate();
});
document.getElementById('operator').addEventListener('input', function(){
    calculate();
});

function calculate() {
    var a = parseFloat(document.getElementById('input1').value);
    var b = parseFloat(document.getElementById('input2').value);
    var operator = document.getElementById('operator').value;
    var result;

    if (operator == '+') {
        result = a + b;
      } else if (operator == '-') {
        result = a - b;
      } else if (operator == '*') {
        result = a * b;
      } else if (operator == '/') {
        result = a / b;
      } else {
        result = 'invalid operator'
      }
    
    document.getElementById('result').innerHTML = result;
}