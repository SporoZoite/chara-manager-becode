import { dragDropEmpt } from "./dragdropempty.js";
import { add } from "./post.js";
import { newCard } from "./newcard.js";
import { deleteButton, backButton, buttonSolo } from "./buttons";

export async function newChara() {
  newCard();
  dragDropEmpt();

  buttonSolo();

  const saveButton = document.createElement("input");
  saveButton.setAttribute("id", "updateButton");
  saveButton.setAttribute("type", "submit");
  saveButton.setAttribute("value", "Save New Character");
  saveSolo.appendChild(updateButton);
  saveButton.addEventListener("click", async () => {
    add();
  });

  deleteButton();
  backButton();
}
