const add1= document.querySelector('#add1');
const subtract1= document.querySelector('#subtract1');
const quantity1= document.querySelector('#quantity1');

add1.addEventListener('click', () => quantity1.value = Number (quantity1.value) + 1);
subtract1.addEventListener('click', () =>  { 
    quantity1.value = Number (quantity1.value) - 1
    if (quantity1.value <= 0) {
        quantity1.value = 0
    }
}) ;


const add2= document.querySelector('#add2');
const subtract2= document.querySelector('#subtract2');
const quantity2= document.querySelector('#quantity2');

add2.addEventListener('click', () => quantity2.value = Number (quantity2.value) + 1);
subtract2.addEventListener('click', () =>  { 
    quantity2.value = Number (quantity2.value) - 1
    if (quantity2.value <= 0) {
        quantity2.value = 0
    }
}) ;