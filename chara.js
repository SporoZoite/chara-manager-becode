import { backButton, buttonSolo, eraseButton, updatedButton } from "./buttons";

export async function chara() {
  let idChara = sessionStorage.getItem("idChara");
  let nameChara = sessionStorage.getItem("nameChara");
  let descriptionChara = sessionStorage.getItem("descriptionChara");
  let shortDesChara = sessionStorage.getItem("shortDesChara");
  let imgChara = sessionStorage.getItem("imgChara");

  const root = document.getElementById("root");
  let containerBis = document.createElement("div");
  containerBis.setAttribute("id", "container");
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

  buttonSolo();

  updatedButton();

  eraseButton();

  backButton();
}
