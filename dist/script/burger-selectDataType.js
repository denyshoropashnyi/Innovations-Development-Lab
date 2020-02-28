'use strict';

const headerBtnPrint = document.getElementById('headerBtnPrint');
const footerBtnPrint = document.getElementById('footerBtnPrint');
const headerBurger = document.getElementById('headerBurger');
const headerList = document.getElementById('headerList');

headerBurger.addEventListener('click', switchBurger);

function switchBurger(event) {
    let target = event.target;
    if (target.classList.contains('header__burger')) {
        headerList.classList.toggle('active');
        headerBurger.classList.toggle('active');
    }
}


const sectionMainWhat = document.getElementsByClassName('section-main__what');

for (let i = 0; i < sectionMainWhat.length; i++) {
    sectionMainWhat[i].addEventListener('click', selectDataType);
}

function selectDataType(event) {
    let target = event.target;
    if (target.classList.contains('selectTranslateBtn')) {
        for (let i = 0; i < sectionMainWhat.length; i++) {
            sectionMainWhat[i].classList.remove('selected');
        }
        target.parentNode.classList.add('selected');
        event.preventDefault();
    }
    // event.preventDefault();

}

headerBtnPrint.addEventListener('click', (e) => window.print());
footerBtnPrint.addEventListener('click', (e) => window.print());