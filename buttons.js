/* eslint-disable no-undef */
/* eslint-disable no-shadow */
/* eslint-disable import/no-cycle */
/* eslint-disable import/extensions */
import { updateChara } from './upchara.js';
import { deleteChara } from './delete.js';

export function deleteButton() {
  const deleteButton = document.createElement('button');
  deleteButton.setAttribute('id', 'deleteButton');
  deleteButton.innerText = 'Delete character';
  buttonSolo.appendChild(deleteButton);
  deleteButton.addEventListener('click', () => {
    window.location.href = 'index.html';
  });
}

export function backButton() {
  const backButton = document.createElement('button');
  backButton.setAttribute('id', 'backButton');
  backButton.innerText = '<Back';
  cardSolo.appendChild(backButton);
  backButton.addEventListener('click', () => {
    window.location.href = 'index.html';
  });
}

export function updateButton() {
  const updateButton = document.createElement('input');
  updateButton.setAttribute('id', 'updateButton');
  updateButton.setAttribute('type', 'submit');
  updateButton.setAttribute('value', 'Save Updated Character');
  buttonSolo.appendChild(updateButton);
  updateButton.addEventListener('click', async () => {
    editor();
  });
}

export function eraseButton() {
  const deleteButton = document.createElement('button');
  deleteButton.setAttribute('id', 'deleteButton');
  deleteButton.innerText = 'Delete character';
  buttonSolo.appendChild(deleteButton);
  deleteButton.addEventListener('click', () => {
    deleteChara();
  });
}

export function updatedButton() {
  const updateButton = document.createElement('button');
  updateButton.setAttribute('id', 'updateButton');
  updateButton.innerText = 'Update character';
  buttonSolo.appendChild(updateButton);
  updateButton.addEventListener('click', () => {
    cardChara.remove();
    updateChara();
  });
}
