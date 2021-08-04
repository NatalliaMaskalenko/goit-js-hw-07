const images = [
  {
    url: 'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'White and Black Long Fur Cat',
  },
  {
    url: 'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
  },
  {
    url: 'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Group of Horses Running',
  },
];

const listEl = document.querySelector('#gallery');

const creatElements = function (array) {
    const arrayElements = [];

    array.map(element => {
        const creatList = document.createElement('li');
        creatList.classList.add('gallery__item');
        const creatImeges = document.createElement('img');
        creatList.appendChild(creatImeges);
        creatImeges.src = element.url;
        creatImeges.alt = element.alt;
          
        arrayElements.push(creatList);

    })

    return listEl.append(...arrayElements);

};

creatElements(images);