const decrementBtn = document.querySelector('button[data-action="decrement"]');
const valueEl = document.querySelector('#value');
const incrementBtn = document.querySelector('button[data-action="increment"]');


console.log(decrementBtn, valueEl, incrementBtn);

let counterValue = 0;

    const onIncrementBtnClick = function () {
    counterValue += 1;
    valueEl.textContent = counterValue;
           
};
    
    const onDecrementBtnClick  = function () {
    counterValue -= 1;
    valueEl.textContent = counterValue;
              
};

decrementBtn.addEventListener('click', onDecrementBtnClick);
incrementBtn.addEventListener('click', onIncrementBtnClick);

  
