// Get references to the DOM elements

var buttons = document.getElementsByTagName('button');
var displayScreen = document.getElementById('display');

var firstNumber = "";
var lastNumber = "";
var operator = null;
var answer = 0;

function isNumber(val) {
  return !isNaN(val);
}

function calc() {

  var a = parseFloat(firstNumber);
  var b = parseFloat(lastNumber);

  switch(operator) {
    case '+':
            answer = a + b;
            break;
    case '-':
            answer = a - b;
            break;
    case '*':
            answer = a * b;
            break;
    case '/':
            answer = a / b;
            break;
  }

}

  for (var i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener("click", function() {
      displayScreen.innerHTML += this.innerHTML;


      if(isNumber(this.innerHTML)) {

        if(operator === null) {
          firstNumber += this.innerHTML;
        } else {
          lastNumber += this.innerHTML;
        }
      }

      if(this.className === 'opr') {
        
        if(lastNumber) {
          calc();
          displayScreen.innerHTML = answer;
          firstNumber = answer;
          lastNumber = "";
        }

        operator = this.innerHTML;

      }


      if(this.innerHTML === "=") {
        calc();
        displayScreen.innerHTML = answer;
      }

      if (this.innerHTML === "C") {
        displayScreen.innerHTML = "";
        firstNumber = "";
        lastNumber = "";
        operator = null;
        answer = "";
      }
    });
  }









