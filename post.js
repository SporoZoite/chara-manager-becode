/* eslint-disable no-console */
/* eslint-disable no-alert */
/* eslint-disable import/prefer-default-export */
export async function add() {
  const prevMage = document.getElementById("prevmage");
  const text = Array.from(document.querySelectorAll("textarea"));
  const values = text.map(({ value }) => value.trim());
  if (values.some((value) => value === "")) {
    alert("Please fill in all fields");
    return;
  }

  const [name, shortDescription] = values;
  let image = prevMage.src;
  image = image.substr(22);
  const id = null;
  const description = document.getElementById("editor").innerHTML;

  const postData = await fetch(
    "https://character-database.becode.xyz/characters/",
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        id,
        name,
        shortDescription,
        description,
        image,
      }),
    }
  );
  console.log(postData);
  console.log(postData.json());
  window.location.href = "index.html";
}
