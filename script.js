const display = document.querySelector(".calculator-input");
const keys = document.querySelector(".bottom");

let displayValue = "";
let operator = "";

let firstValue = null
let secondNumFlag = false



function updateDisplay(){
    display.value = displayValue;
}

let num1 = 0


keys.addEventListener('click',function(e){
    const element = e.target;

    if(!element.matches('button')) return;


    console.log(element);

    if(element.classList.contains('clear')){
        resetDisplay()
    }
    else if(element.classList.contains('operator')){
      //  operator = element.value
     //   num1 = displayValue    
        handleOperator(element.value);
        updateDisplay();
        return;    
      //  handleOperator(operator)
      //  clear()
    }
    else if(element.classList.contains('decimal')){
        inputDecimal()
        updateDisplay() 
        return;
    }   
    else{
        inputNumber(element.value); 
        updateDisplay() 
        return;
    }


  

    updateDisplay() 
    
});
function clear(){
    displayValue = '0'
}
/*
function finalResult(){
    console.log('finalresultt ' +result);
    display.value = result
   
}
*/

function handleOperator(nextOperator){
    const value = parseFloat(displayValue)

    if(operator && secondNumFlag) {
        operator = nextOperator;
        return;
    }
  
    if(firstValue === null){
        firstValue = value
    }
    else if(operator){
        const result = calculate(firstValue,value,nextOperator)

        
        displayValue = `${parseFloat(result.toFixed(7))}`;
        firstValue = result;
    }
    
    operator = nextOperator;
    secondNumFlag = true;

  
    console.log('workingg')
}
function calculate(first,second,operator){
    if(operator === '+'){
         return first +second;
    }
    else if(operator === '*'){
        return first * second
    }
    else if(operator === '/'){
        return first / second
    }
    else if(operator === '-'){
        return first - second;
    }

    return second;
    
}

function inputDecimal(){
    if(!displayValue.includes('.')){
        displayValue +=  '.'; 
    }
   

}

function resetDisplay(){
    displayValue = '0'
    firstValue = null
}

function inputNumber(num){   
    if(secondNumFlag) {
        displayValue = num
        secondNumFlag = false
    }else{
        displayValue = displayValue === '0' ? num : displayValue + num; 
    }
   
}