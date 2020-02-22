'use strict';

const headerBurger = document.getElementById('headerBurger');
const headerBody = document.getElementById('headerBody');
const headerList = document.getElementById('headerList');

document.addEventListener('click', switchBurger);

function switchBurger(event) {
    let text = event.target;
    if (text == headerBurger) {
        headerList.classList.toggle('active');
        headerBurger.classList.toggle('active');
    };
}