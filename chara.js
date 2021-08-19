/* eslint-disable import/prefer-default-export */
/* eslint-disable no-undef */
/* eslint-disable import/extensions */
import { eraseButton, updatedButton } from './buttons.js';

export function chara() {
  const nameChara = sessionStorage.getItem('nameChara');
  const descriptionChara = sessionStorage.getItem('descriptionChara');
  const shortDesChara = sessionStorage.getItem('shortDesChara');
  const imgChara = sessionStorage.getItem('imgChara');

  container.style.display = 'none';
  containerB.style.display = 'block';
  cardSolo.style.display = 'none';
  newButton.remove();

  const cardChara = document.getElementById('cardChara');
  const image = document.createElement('img');
  image.setAttribute('class', 'rounded');
  image.setAttribute('id', 'bigImg');
  image.src = imgChara;
  cardChara.appendChild(image);

  const titreSolo = document.createElement('div');
  titreSolo.setAttribute('class', 'titreSolo');
  const h3 = document.createElement('h3');
  h3.textContent = nameChara;
  cardChara.appendChild(titreSolo);
  titreSolo.appendChild(h3);

  const minp = document.createElement('p');
  minp.setAttribute('id', 'minP');
  minp.textContent = `${shortDesChara}`;
  titreSolo.appendChild(minp);

  const p = document.createElement('p');
  p.setAttribute('id', 'bigP');
  p.innerHTML = `${descriptionChara}`;
  cardChara.appendChild(p);

  const buttonSolo = document.createElement('div');
  buttonSolo.setAttribute('class', 'buttonSolo');
  buttonSolo.setAttribute('id', 'buttonSolo');
  cardChara.appendChild(buttonSolo);

  updatedButton();

  eraseButton();

  const indexButton = document.createElement('button');
  indexButton.setAttribute('id', 'backButton');
  indexButton.innerText = '<Back';
  indexButton.addEventListener('click', () => {
    window.location.href = 'index.html';
  });
  cardChara.appendChild(indexButton);
}
