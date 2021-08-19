import { dragDropFull } from "./dragdropfull.js";
import { newCard } from "./newcard.js";
import { backButton, buttonSolo, eraseButton, updateButton } from "./buttons";

export async function updateChara() {
  let idChara = sessionStorage.getItem("idChara");
  let nameChara = sessionStorage.getItem("nameChara");
  let descriptionChara = sessionStorage.getItem("descriptionChara");
  let shortDesChara = sessionStorage.getItem("shortDesChara");

  newCard();

  document.getElementById("name").innerHTML = nameChara;
  document.getElementById("shortDescription").innerHTML = shortDesChara;
  document.getElementById("editor").innerHTML = descriptionChara;

  dragDropFull();

  buttonSolo();

  updateButton();

  eraseButton();

  backButton();
}
