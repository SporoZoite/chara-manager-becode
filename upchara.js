/* eslint-disable no-undef */
/* eslint-disable import/prefer-default-export */
/* eslint-disable import/no-cycle */
/* eslint-disable import/extensions */
import { dragDropFull } from './dragdropfull.js';
import { backButton } from './buttons.js';
import { editor } from './put.js';
import { deleteChara } from './delete.js';

export function updateChara() {
  const nameChara = sessionStorage.getItem('nameChara');
  const descriptionChara = sessionStorage.getItem('descriptionChara');
  const shortDesChara = sessionStorage.getItem('shortDesChara');

  containerB.style.display = 'block';
  cardSolo.style.display = 'block';

  document.getElementById('name').innerHTML = nameChara;
  document.getElementById('shortDescription').innerHTML = shortDesChara;
  document.getElementById('editor').innerHTML = descriptionChara;

  dragDropFull();

  const buttonSolo = document.createElement('div');
  buttonSolo.setAttribute('class', 'buttonSolo');
  buttonSolo.setAttribute('id', 'buttonSolo');
  cardSolo.appendChild(buttonSolo);

  const updateButton = document.createElement('input');
  updateButton.setAttribute('id', 'updateButton');
  updateButton.setAttribute('type', 'submit');
  updateButton.setAttribute('value', 'Save Updated Character');
  buttonSolo.appendChild(updateButton);
  updateButton.addEventListener('click', async () => {
    editor();
  });

  const deleteButton = document.createElement('button');
  deleteButton.setAttribute('id', 'deleteButton');
  deleteButton.innerText = 'Delete character';
  buttonSolo.appendChild(deleteButton);
  deleteButton.addEventListener('click', () => {
    deleteChara();
  });

  backButton();
}
