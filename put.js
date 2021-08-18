
 import {back} from './back.js';
export async function editor (){
    let idChara = sessionStorage.getItem("idChara");
    const prevMage = document.getElementById("prevmage");
    let text = Array.from(document.querySelectorAll("textarea"));
    let values = text.map(({ value }) => {
      return value.trim();
    });
    if (values.some((value) => value === "")) {
      alert("Please fill in all fields");
      return;
    }
    
    let [name, shortDescription] = values;
    console.log(values);
    let image = prevMage.src;
    image = image.substr(22);
    console.log(image);
    let id = idChara;
    let description = document.getElementById("editor").innerHTML;
    console.log(description);
    
    const postData = await fetch(
      "https://character-database.becode.xyz/characters/" + id,
      {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ name, shortDescription, description, image }),
      }
    );
    console.log(postData);
    console.log(postData.json());
    back();
    }