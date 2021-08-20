/* eslint-disable no-undef */
/* eslint-disable import/prefer-default-export */
/* eslint-disable import/extensions */
import { dragDropEmpt } from "./dragdropempty.js";
import { add } from "./post.js";
import { deleteButton, backButton } from "./buttons.js";

export async function newChara() {
  container.style.display = "none";
  containerB.style.display = "block";
  newButton.remove();
  dragDropEmpt();

  const buttonSolo = document.createElement("div");
  buttonSolo.setAttribute("class", "buttonSolo");
  buttonSolo.setAttribute("id", "buttonSolo");
  cardSolo.appendChild(buttonSolo);

  const saveButton = document.createElement("input");
  saveButton.setAttribute("id", "updateButton");
  saveButton.setAttribute("type", "submit");
  saveButton.setAttribute("value", "Save New Character");
  buttonSolo.appendChild(saveButton);
  saveButton.addEventListener("click", async () => {
    add();
  });

  deleteButton();
  backButton();
}
