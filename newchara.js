import {back} from './back.js';
import {dragDropEmpt} from './dragdropempty.js';
import {add} from './post.js';

dragDropEmpt();

const cardSolo =document.getElementById("cardSolo")
const buttonSolo = document.createElement("div");
buttonSolo.setAttribute("class", "buttonSolo");
cardSolo.appendChild(buttonSolo);

const updateButton = document.createElement("input");
updateButton.setAttribute("id", "updateButton");
updateButton.setAttribute("type", "submit");
updateButton.setAttribute("value", "Save New Character");
buttonSolo.appendChild(updateButton);
updateButton.addEventListener("click", async () => {
  add();
});

const deleteButton = document.createElement("button");
deleteButton.setAttribute("id", "deleteButton");
deleteButton.innerText = "Cancel character";
buttonSolo.appendChild(deleteButton);
deleteButton.addEventListener("click", () => {
  back();
});

const backButton = document.createElement("button");
backButton.setAttribute("id", "backButton");
backButton.innerText = "<Back";
backButton.addEventListener("click", function () {
  back();
});
cardSolo.appendChild(backButton);



