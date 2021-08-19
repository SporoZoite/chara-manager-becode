/* eslint-disable no-plusplus */
/* eslint-disable prefer-const */
/* eslint-disable import/prefer-default-export */
export function searchBar() {
  let input; let filter; let cards; let cardContainer; let title; let
    i;
  input = document.getElementById('search');
  filter = input.value.toUpperCase();
  cardContainer = document.getElementById('container');
  cards = cardContainer.getElementsByClassName('card');

  for (i = 0; i < cards.length; i++) {
    title = cards[i].querySelector('.cardtitre');
    if (title.innerText.toUpperCase().indexOf(filter) > -1) {
      cards[i].style.display = '';
    } else {
      cards[i].style.display = 'none';
    }
  }
}
