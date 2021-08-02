
const categoriesQuantity = () => {
    const categoriesquantityEl = document.querySelector('#categories').children.length;
    console.log(`В списке ${categoriesquantityEl} категории.`);
 };

categoriesQuantity();

const categories = () => {

     const categoriesEl = document.querySelectorAll('h2');
     categoriesEl.forEach((category) => console.log(`Категория:  ${category.textContent}. Количество элементов:  ${category.nextElementSibling.children.length}`));

}

categories();


