const ingredients = [
  'Картошка',
  'Грибы',
  'Чеснок',
  'Помидоры',
  'Зелень',
  'Приправы',
];

 
const listEl = document.querySelector('#ingredients');

const creatElements = function (array) {
    const arrayElements = [];

    array.map(element => {
        const creatElement = document.createElement('li');
        arrayElements.push(creatElement);
        creatElement.textContent = element;
    })

    return listEl.append(...arrayElements);

};

creatElements(ingredients);