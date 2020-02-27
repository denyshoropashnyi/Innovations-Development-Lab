'use strict';

const infoArea = document.getElementById('infoArea');
const infoTemplate = document.getElementById('infoTemplate').innerHTML;
const usersFilesListTable = document.getElementById('usersFilesListTable');
const inputFile = document.getElementById('userFile');
const delTrBtn = document.getElementsByTagName('button');

inputFile.addEventListener('change', submitFile);
infoArea.addEventListener('click', onDeleteTrClick);


function submitFile(event) {
    let input = event.srcElement;
    const userFile = {
        name: input.files[0].name,
        size: input.files[0].size,
    }

    addFile(userFile);
};

function addFile(userFile) {
    const userFileTr = document.createElement('tr');

    userFileTr.innerHTML = infoTemplate
        .replace('{{name}}', userFile.name)
        .replace('{{size}}', Math.round(userFile.size / 1000) + 'kb')
        .replace('{{words}}', userFile.word || '-')
        .replace('{{delete}}', '<button class="delTrBtn"></button>');
    infoArea.appendChild(userFileTr);
    usersFilesListTable.classList.remove('hide');
}

function onDeleteTrClick() {
    deleteElement(event.target)
}

function deleteElement(element) {
    element.tagName === 'BUTTON' && element.parentNode.parentNode.remove();
}