
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
      }
      else if (operator == '-') {
        result = a - b;
      }
       else if (operator == '*') {
        result = a * b;
      } else if (operator == '/') {
        result = a / b;
      } else {
        result = ' '
      }
    
    document.getElementById('result').innerHTML = result.toFixed(3);
}