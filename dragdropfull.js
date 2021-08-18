export function dragDropFull(){
    let imgChara = sessionStorage.getItem("imgChara");
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
}