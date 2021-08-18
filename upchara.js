import {back} from './back.js';
import {deleteChara} from './delete.js';
import {dragDropFull} from './dragdropfull.js';
import {editor} from './put.js';
import {newCard} from './newcard.js';

export async function updateChara(){
let idChara = sessionStorage.getItem("idChara");
let nameChara = sessionStorage.getItem("nameChara");
let descriptionChara = sessionStorage.getItem("descriptionChara");
let shortDesChara = sessionStorage.getItem("shortDesChara");

newCard();

document.getElementById("name").innerHTML = nameChara;
document.getElementById("shortDescription").innerHTML = shortDesChara;
document.getElementById("editor").innerHTML = descriptionChara;


dragDropFull();



const buttonSolo = document.createElement("div");
buttonSolo.setAttribute("class", "buttonSolo");
cardSolo.appendChild(buttonSolo);

const updateButton = document.createElement("input");
updateButton.setAttribute("id", "updateButton");
updateButton.setAttribute("type", "submit");
updateButton.setAttribute("value", "Save Updated Character");
buttonSolo.appendChild(updateButton);
updateButton.addEventListener("click", async () => {
  editor();
});

const deleteButton = document.createElement("button");
deleteButton.setAttribute("id", "deleteButton");
deleteButton.innerText = "Delete character";
buttonSolo.appendChild(deleteButton);
deleteButton.addEventListener("click", () => {
  deleteChara();
});

const backButton = document.createElement("button");
backButton.setAttribute("id", "backButton");
backButton.innerText = "<Back";
backButton.addEventListener("click", () => {
  back();
});
cardSolo.appendChild(backButton);

}
