export function newCard(){
    const root = document.getElementById("root");
let containerBis = document.createElement("div");
containerBis.setAttribute("id","container");
root.appendChild(containerBis);
let cardSolo = document.createElement("div");
cardSolo.setAttribute("id", "cardSolo");
containerBis.appendChild(cardSolo);
let dropRegion = document.createElement("div");
dropRegion.setAttribute("id","drop-region");
cardSolo.appendChild(dropRegion);
let dropMessage = document.createElement("div");
dropMessage.setAttribute("class","drop-message");
dropMessage.innerText= "Preview";
dropRegion.appendChild(dropMessage);
let imagePreview = document.createElement("div");
imagePreview.setAttribute("id","image-preview");
dropRegion.appendChild(imagePreview);
let name = document.createElement("textarea");
name.id="name";
name.name="name";
name.cols="60";
name.rows="1";
name.innerText="Character name";
cardSolo.appendChild(name);
let shortDescription = document.createElement("textarea");
shortDescription.id="shortDescription";
shortDescription.name="shortDescription";
shortDescription.cols="60";
shortDescription.rows="2";
shortDescription.innerText="Short Description";
cardSolo.appendChild(shortDescription);
let toolbar = document.createElement("div");
toolbar.setAttribute("class","__toolbar");
cardSolo.appendChild(toolbar);
let description = document.createElement("div");
description.setAttribute("data-tiny-editor","");
description.setAttribute("data-formatblock","no");
description.setAttribute("data-fontname","no");
description.setAttribute("data-remove-format","no");
description.setAttribute("data-indent","no");
description.setAttribute("data-outdent","no");
description.setAttribute("contenteditable","true");
description.setAttribute("class","__editor");
description.setAttribute("spellcheck","true");
description.id="editor";
cardSolo.appendChild(description);

let bold = document.createElement("button");
bold.setAttribute("data-command-id","bold");
bold.setAttribute("class","__toolbar-item");
bold.titre="Bold";
bold.type="button";
toolbar.appendChild(bold);

let boldIcon = document.createElement("i");
boldIcon.setAttribute("class","fas fa-bold");
bold.appendChild(boldIcon);

let italic = document.createElement("button");
italic.setAttribute("data-command-id","italic");
italic.setAttribute("class","__toolbar-item");
italic.titre="Italic";
italic.type="button";
toolbar.appendChild(italic);

let italIcon = document.createElement("i");
italIcon.setAttribute("class","fas fa-italic");
italic.appendChild(italIcon);

let underline = document.createElement("button");
underline.setAttribute("data-command-id","underline");
underline.setAttribute("class","__toolbar-item");
underline.titre="Underline";
underline.type="button";
toolbar.appendChild(underline);

let underIcon = document.createElement("i");
underIcon.setAttribute("class","fas fa-underline");
underline.appendChild(underIcon);

let color = document.createElement("input");
color.setAttribute("data-command-id","forecolor");
color.setAttribute("class","__toolbar-item");
color.titre="Text color";
color.type="color";
toolbar.appendChild(color);

let span = document.createElement("span");
span.setAttribute("class","__toolbar-separator");
toolbar.appendChild(span);

let justifyL = document.createElement("button");
justifyL.setAttribute("data-command-id","justifyleft");
justifyL.setAttribute("class","__toolbar-item");
justifyL.titre="Left align";
justifyL.type="button";
toolbar.appendChild(justifyL);

let leftIcon = document.createElement("i");
leftIcon.setAttribute("class","fas fa-align-left");
justifyL.appendChild(leftIcon);

let justifyC = document.createElement("button");
justifyC.setAttribute("data-command-id","justifycenter");
justifyC.setAttribute("class","__toolbar-item");
justifyC.titre="Center align";
justifyC.type="button";
toolbar.appendChild(justifyC);

let centerIcon = document.createElement("i");
centerIcon.setAttribute("class","fas fa-align-center");
justifyC.appendChild(centerIcon);

let justifyR = document.createElement("button");
justifyR.setAttribute("data-command-id","justifyright");
justifyR.setAttribute("class","__toolbar-item");
justifyR.titre="Right align";
justifyR.type="button";
toolbar.appendChild(justifyR);

let rightIcon = document.createElement("i");
rightIcon.setAttribute("class","fas fa-align-right");
justifyR.appendChild(rightIcon);
toolbar.appendChild(span);

let orderedList = document.createElement("button");
orderedList.setAttribute("data-command-id","insertorderedlist");
orderedList.setAttribute("class","__toolbar-item");
orderedList.titre="Numbered list";
orderedList.type="button";
toolbar.appendChild(orderedList);

let orderIcon = document.createElement("i");
orderIcon.setAttribute("class","fas fa-list-ol");
orderedList.appendChild(orderIcon);

let bulletList = document.createElement("button");
bulletList.setAttribute("data-command-id","insertunorderedlist");
bulletList.setAttribute("class","__toolbar-item");
bulletList.titre="Bulleted list";
bulletList.type="button";
toolbar.appendChild(bulletList);

let bulletIcon = document.createElement("i");
bulletIcon.setAttribute("class","fas fa-list-ul");
bulletList.appendChild(bulletIcon);
toolbar.appendChild(span);
}