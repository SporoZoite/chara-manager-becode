let idChara = sessionStorage.getItem("idChara");
let nameChara = sessionStorage.getItem("nameChara");
let descriptionChara = sessionStorage.getItem("descriptionChara");
let shortDesChara = sessionStorage.getItem("shortDesChara");
let imgChara = sessionStorage.getItem("imgChara");
console.log(idChara);
console.log(nameChara);
console.log(descriptionChara);
console.log(shortDesChara);
console.log(imgChara);

document.getElementById("name").innerHTML = nameChara;
document.getElementById("shortDescription").innerHTML = shortDesChara;
document.getElementById("editor").innerHTML = descriptionChara;

let // where files are dropped + file selector is opened
  dropRegion = document.getElementById("drop-region"),
  // where images are previewed
  imagePreviewRegion = document.getElementById("image-preview");

// open file selector when clicked on the drop region
let fakeInput = document.createElement("input");
fakeInput.type = "file";
fakeInput.accept = "image/*";
fakeInput.multiple = true;
dropRegion.addEventListener("click", function () {
  fakeInput.click();
});

fakeInput.addEventListener("change", function () {
  let files = fakeInput.files;
  handleFiles(files);
});

function preventDefault(e) {
  e.preventDefault();
  e.stopPropagation();
}

dropRegion.addEventListener("dragenter", preventDefault, false);
dropRegion.addEventListener("dragleave", preventDefault, false);
dropRegion.addEventListener("dragover", preventDefault, false);
dropRegion.addEventListener("drop", preventDefault, false);

function handleDrop(e) {
  let dt = e.dataTransfer,
    files = dt.files;

  if (files.length) {
    handleFiles(files);
  } else {
    // check for img
    let html = dt.getData("text/html"),
      match = html && /\bsrc="?([^"\s]+)"?\s*/.exec(html),
      url = match && match[1];

    if (url) {
      uploadImageFromURL(url);
      return;
    }
  }

  function uploadImageFromURL(url) {
    let img = new Image();
    let c = document.createElement("canvas");
    let ctx = c.getContext("2d");

    img.onload = function () {
      c.width = this.naturalWidth; // update canvas size to match image
      c.height = this.naturalHeight;
      ctx.drawImage(this, 0, 0); // draw in image
      c.toBlob(function (blob) {
        // get content as PNG blob

        // call our main function
        handleFiles([blob]);
      }, "image/png");
    };
    img.onerror = function () {
      alert("Error in uploading");
    };
    img.crossOrigin = ""; // if from different origin
    img.src = url;
  }
}

dropRegion.addEventListener("drop", handleDrop, false);

function handleFiles(files) {
  for (let i = 0, len = files.length; i < len; i++) {
    if (validateImage(files[i])) previewImage(files[i]);
  }
}

function validateImage(image) {
  // check the type
  let validTypes = ["image/jpeg", "image/png", "image/gif"];
  if (validTypes.indexOf(image.type) === -1) {
    alert("Invalid File Type");
    return false;
  }

  // check the size
  let maxSizeInBytes = 10e6; // 10MB
  if (image.size > maxSizeInBytes) {
    alert("File too large");
    return false;
  }

  return true;
}

// container
const imgView = document.createElement("div");
imgView.className = "image-view";
imagePreviewRegion.appendChild(imgView);

// previewing image
const img = document.createElement("img");
img.setAttribute("id", "prevmage");
img.className = "rounded";
imgView.appendChild(img);
img.src = imgChara;

function previewImage(image) {
  // read the image...
  let reader = new FileReader();
  reader.onload = function (e) {
    img.src = e.target.result;
  };
  reader.readAsDataURL(image);
}

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

document
  .querySelectorAll("[data-tiny-editor]")
  .forEach((editor) =>
    editor.addEventListener("input", (e) => console.log(e.target.innerHTML))
  );

async function back() {
  window.location.href = "index.html";
}

async function deleteChara() {
  if (confirm("Are you sure?") == true) {
    try {
      let resp = await fetch(
        "https://character-database.becode.xyz/characters/" + idChara,
        {
          method: "DELETE",
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      if (!resp.ok) {
        throw new Error("ID not found");
      } else {
        window.location.href = "index.html";
      }
    } catch (err) {
      alert(err);
    }
  }
}

async function editor (){
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