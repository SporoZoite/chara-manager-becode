/* eslint-disable func-names */
/* eslint-disable import/extensions */
import { searchBar } from './searchbar.js';
import { newChara } from './newchara.js';
import { chara } from './chara.js';
import 'regenerator-runtime/runtime';

const searchbox = document.getElementById('search');

const containerB = document.getElementById('containerB');
containerB.style.display = 'none';
const container = document.getElementById('container');

const newButton = document.getElementById('newButton');
newButton.addEventListener('click', () => {
  newChara();
});

const request = new XMLHttpRequest();
request.open('GET', 'https://character-database.becode.xyz/characters', true);
request.onload = function () {
  // Begin accessing JSON data here
  const data = JSON.parse(this.response);
  if (request.status >= 200 && request.status < 400) {
    data.forEach((character) => {
      const card = document.createElement('div');
      card.setAttribute('class', 'card');
      card.setAttribute('id', 'card');
      container.appendChild(card);

      const image = document.createElement('img');
      image.setAttribute('class', 'rounded');
      image.src = `data:image/png;base64,${character.image}`;
      card.appendChild(image);

      const h1 = document.createElement('h2');
      h1.setAttribute('class', 'cardtitre');
      h1.textContent = character.name;
      card.appendChild(h1);

      const p = document.createElement('p');
      p.textContent = `${character.shortDescription.substring(0, 150)}...`;
      card.appendChild(p);

      searchbox.addEventListener('keyup', () => {
        searchBar();
      });

      const charaButton = document.createElement('button');
      charaButton.setAttribute('id', 'charaButton');
      charaButton.innerText = 'See character';
      card.appendChild(charaButton);
      charaButton.addEventListener('click', () => {
        const idChara = character.id;
        const nameChara = character.name;
        const descriptionChara = character.description;
        const shortDesChara = character.shortDescription;
        const imgChara = `data:image/png;base64,${character.image}`;

        sessionStorage.setItem('idChara', idChara);
        sessionStorage.setItem('nameChara', nameChara);
        sessionStorage.setItem('descriptionChara', descriptionChara);
        sessionStorage.setItem('shortDesChara', shortDesChara);
        sessionStorage.setItem('imgChara', imgChara);
        chara();
      });
    });
  } else {
    const errorMessage = document.createElement('marquee');
    errorMessage.textContent = 'Gah, it\'s not working!';
    container.appendChild(errorMessage);
  }
};

request.send();
