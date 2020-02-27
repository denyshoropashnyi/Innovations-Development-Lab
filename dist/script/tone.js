const toneItem = document.getElementById('tone__item');
const toneButton = document.getElementsByClassName('toneButton');

toneItem.addEventListener('click', selectTone);

function selectTone(event) {
    let target = event.target;
    if (target.classList.contains('toneButton')) {
        for (let i = 0; i < toneButton.length; i++) {
            toneButton[i].classList.remove('selected');
        }
        target.classList.add('selected');
    }
}