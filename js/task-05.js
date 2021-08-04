const inputEl = document.querySelector('#name-input');
const textEl = document.querySelector('#name-output');
console.log(inputEl, textEl);


const onInput = function (event) {
 
    event.currentTarget.value === "" ? textEl.textContent = 'незнакомец' : textEl.textContent = event.currentTarget.value;
    console.log(event.currentTarget.value);
      
 };

inputEl.addEventListener('input', onInput);