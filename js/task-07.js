const rangeEl = document.querySelector('#font-size-control');
const textEl = document.querySelector('#text');
rangeEl.step = '1';
rangeEl.min = '8';
rangeEl.max = '24';



console.log(rangeEl, textEl);

const onRangeInput = function (event) {
   
    textEl.setAttribute("style", `font-size: ${event.currentTarget.value}px`)
    
}

rangeEl.addEventListener('input', onRangeInput);



