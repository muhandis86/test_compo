const buttonHeart = document.querySelector('button.heart');
const buttonBasket = document.querySelector('button.basket');
const buttonCounter = document.querySelector('button.counter');

const addBtn = document.querySelector('span.add');
const removeBtn = document.querySelector('span.remove');
const counterLabel = document.querySelector('.counter__label');

const clearInput = document.querySelector('.header__top_close');
const searchInput = document.querySelector('.search__input');

buttonHeart.addEventListener('click', (e) => {
    e.target.classList.toggle('active');
})

buttonBasket.addEventListener('click', (e) => {
    e.target.classList.add('hide');
    buttonCounter.classList.remove('hide');
})

addBtn.addEventListener('click', (e) => {
    let num = +counterLabel.textContent.split(' ')[0] + 1;
    let word = correctWord(num);
    counterLabel.textContent = num + ' ' + word;

})

removeBtn.addEventListener('click', (e) => {
    let num = +counterLabel.textContent.split(' ')[0] - 1;
    let word = correctWord(num);

    if (num === 0) {
        buttonCounter.classList.add('hide');
        buttonBasket.classList.remove('hide');
        num++;
        word = correctWord(num);
    }
    counterLabel.textContent = num + ' ' + word;
})

function correctWord(num) {
    const unit = num.toString();

    if (num >= 11 && num <= 14) {
        return 'штук';
    }

    if (unit[unit.length - 1] == 1) {
        return 'штука';
    } else if (unit[unit.length - 1] >= 2 && unit[unit.length - 1] <= 4) {
        return 'штуки';
    } else {
        return 'штук';
    }
}

clearInput.addEventListener('click', (e) => {
    searchInput.value = '';
})
