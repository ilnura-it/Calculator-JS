const operators = ['+', '-', '*', '/'];
let display = document.querySelector('#display');
let buttons = Array.from(document.querySelectorAll('.button'));

buttons.map((button) => {
  button.addEventListener('click', (e) => {
    let key = e.target;
    let keyContent = key.textContent;
    let displayedNum = display.innerHTML;
    let last = displayedNum.charAt(displayedNum.length - 1);
    let keys = operators.some((elem) => displayedNum.includes(elem));
    let demimalAdded = false;
    const secondLast = displayedNum[displayedNum.length - 2];
    const y = displayedNum.length - 1;
    const z = displayedNum.length - 2;

   if (
      (keyContent === "+" || keyContent === "*" || keyContent === "/") &&
      (secondLast === "+" || secondLast === "*" || secondLast === "/" || secondLast === "-") &&
     (last === "+" || last === "/" || last === "*" || last ==="-") 
    ) {
      displayedNum = display.textContent.slice(0, z);
      };

    if (
      (keyContent === "+" || keyContent === "*" || keyContent === "/") &&
      (last === "+" || last === "*" || last === "/")
    ) {
      display.textContent = display.textContent.slice(0, -1);
      displayedNum = display.innerHTML.replace(last, keyContent);
    }

    if (keyContent === 'C') {
      display.textContent = '0';
      demimalAdded = false;
    } else if (keyContent === '=') {
      let equation = display.innerHTML;

      if (equation){
         let answer = eval(equation);
         if (answer % 1 !== 0){
            display.innerHTML = parseFloat(answer.toFixed(4));
         } else {
            display.innerHTML = answer;
         }
      } 
      demimalAdded = false;
    } else if (keyContent === 'DEL') {
      if (display.textContent) {
        display.textContent = display.textContent.slice(0, -1);
        if (display.textContent < 1) {
          display.textContent = '0';
        }
      }
      demimalAdded = false;
    } else if (keyContent === '.') {
      if (displayedNum.indexOf('.') === -1) {
        display.textContent += '.';
      } else if (keys === true && !demimalAdded && last === "." || (last === "+" || last === "/" || last === "*" || last ==="-") || (secondLast === ".")  ){
         return;
      } else if (!demimalAdded && keys === true) {
        display.textContent += '.';
      } 
    } else if (displayedNum === '0') {
      display.textContent = keyContent;
    } else {
      display.textContent = displayedNum + keyContent;
    }
  });
});
