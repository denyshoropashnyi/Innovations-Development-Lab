'use strict';

const nonUrgentOrder = document.getElementById('non-urgent-order');
const averageOrder = document.getElementById('average-order');
const urgentOrder = document.getElementById('urgent-order');

const timelineCircle = document.getElementsByClassName('timeline__circle');
const timelineText = document.getElementsByClassName('timeline__text')[0];
const timelineDesc = document.getElementsByClassName('timeline__item');


const xhr = new XMLHttpRequest();

xhr.open("GET", "/../dist/json/urgency.json", false);

xhr.send(null)

const JSONObject = JSON.parse(xhr.responseText);

for (let i = 0; i < timelineCircle.length; i++) {
    timelineCircle[i].addEventListener('click', selectOrderUrgency);
}
timelineText.textContent = JSONObject[0]["average"];

function selectOrderUrgency(event) {
    let target = event.target;
    switch (target) {
        case nonUrgentOrder:
            timelineDesc[1].classList.remove('desc--active');
            timelineDesc[2].classList.remove('desc--active');
            averageOrder.classList.remove('order--active');
            urgentOrder.classList.remove('order--active');
            timelineText.textContent = JSONObject[0]["gotTime"];
            target.classList.toggle('order--active');
            timelineDesc[0].classList.toggle('desc--active');
            break;
        case averageOrder:
            timelineDesc[0].classList.remove('desc--active');
            timelineDesc[2].classList.remove('desc--active');
            nonUrgentOrder.classList.remove('order--active');
            urgentOrder.classList.remove('order--active');
            timelineText.textContent = JSONObject[0]["average"];
            target.classList.toggle('order--active');
            timelineDesc[1].classList.toggle('desc--active');
            break;
        case urgentOrder:
            timelineDesc[0].classList.remove('desc--active');
            timelineDesc[1].classList.remove('desc--active');
            nonUrgentOrder.classList.remove('order--active');
            averageOrder.classList.remove('order--active');
            timelineText.textContent = JSONObject[0]["yesterday"];
            target.classList.toggle('order--active');
            timelineDesc[2].classList.toggle('desc--active');
            break;
        default:
            console.log("something wrong")
            break;
    }
}