const feld = document.querySelector('#validation-input');
console.log(feld);

const onFeldBlur = function (event) {
    feld.classList.add();

   if (event.currentTarget.value.length === Number.parseInt(feld.dataset.length)) {
      return feld.classList ='valid';
    
}

 feld.classList = 'invalid' ;
 console.log("yyy");
};

feld.addEventListener('blur', onFeldBlur);




