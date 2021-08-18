import {deleteChara} from './delete.js';
import {back} from './back.js';
import {updateChara} from './upchara.js';
export async function chara() {

let idChara = sessionStorage.getItem("idChara")
let nameChara =sessionStorage.getItem("nameChara")
let descriptionChara = sessionStorage.getItem("descriptionChara")
let shortDesChara = sessionStorage.getItem("shortDesChara")
let imgChara = sessionStorage.getItem("imgChara")


  const root = document.getElementById("root");
  let containerBis = document.createElement("div");
  containerBis.setAttribute("id","container");
  root.appendChild(containerBis);
  let cardSolo = document.createElement("div");
  cardSolo.setAttribute("id", "cardSolo");
  containerBis.appendChild(cardSolo);

  const image = document.createElement("img");
  image.setAttribute("class", "rounded");
  image.setAttribute("id", "bigImg");
  image.src = imgChara;
  cardSolo.appendChild(image);

  const titreSolo = document.createElement("div");
  titreSolo.setAttribute("class", "titreSolo");
  const h3 = document.createElement("h3");
  h3.textContent = nameChara;
  cardSolo.appendChild(titreSolo);
  titreSolo.appendChild(h3);

  const minp = document.createElement("p");
  minp.setAttribute("id", "minP");
  minp.textContent = `${shortDesChara}`;
  titreSolo.appendChild(minp);

  const p = document.createElement("p");
  p.setAttribute("id", "bigP");
  p.innerHTML = `${descriptionChara}`;
  cardSolo.appendChild(p);

  const buttonSolo = document.createElement("div");
  buttonSolo.setAttribute("class", "buttonSolo");
  cardSolo.appendChild(buttonSolo);

  const updateButton = document.createElement("button");
  updateButton.setAttribute("id", "updateButton");
  updateButton.innerText = "Update character";
  updateButton.addEventListener("click", ()=>{
    container.remove();
    newButton.remove();
    updateChara();
  });
  buttonSolo.appendChild(updateButton);

  const deleteButton = document.createElement("button");
  deleteButton.setAttribute("id", "deleteButton");
  deleteButton.innerText = "Delete character";
  deleteButton.addEventListener("click",()=>{
    deleteChara();
  });
  buttonSolo.appendChild(deleteButton);

  const backButton = document.createElement("button");
  backButton.setAttribute("id", "backButton");
  backButton.innerText = "<Back";
  backButton.addEventListener("click", ()=>{
    back();
  });
  cardSolo.appendChild(backButton);
}