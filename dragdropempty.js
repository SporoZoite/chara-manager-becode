/* eslint-disable no-alert */
/* eslint-disable func-names */
/* eslint-disable no-plusplus */
/* eslint-disable no-use-before-define */
/* eslint-disable import/prefer-default-export */
export function dragDropEmpt() {
  const // where files are dropped + file selector is opened
    dropRegion = document.getElementById('drop-region');
  // where images are previewed
  const imagePreviewRegion = document.getElementById('image-preview');

  // open file selector when clicked on the drop region
  const fakeInput = document.createElement('input');
  fakeInput.type = 'file';
  fakeInput.accept = 'image/*';
  fakeInput.multiple = true;
  dropRegion.addEventListener('click', () => {
    fakeInput.click();
  });

  fakeInput.addEventListener('change', () => {
    const { files } = fakeInput;
    handleFiles(files);
  });

  function preventDefault(e) {
    e.preventDefault();
    e.stopPropagation();
  }

  dropRegion.addEventListener('dragenter', preventDefault, false);
  dropRegion.addEventListener('dragleave', preventDefault, false);
  dropRegion.addEventListener('dragover', preventDefault, false);
  dropRegion.addEventListener('drop', preventDefault, false);

  function handleDrop(e) {
    const dt = e.dataTransfer;
    const { files } = dt;

    if (files.length) {
      handleFiles(files);
    } else {
    // check for img
      const html = dt.getData('text/html');
      const match = html && /\bsrc="?([^"\s]+)"?\s*/.exec(html);
      const url = match && match[1];

      if (url) {
        uploadImageFromURL(url);
      }
    }

    function uploadImageFromURL(url) {
      const img = new Image();
      const c = document.createElement('canvas');
      const ctx = c.getContext('2d');

      img.onload = function () {
        c.width = this.naturalWidth; // update canvas size to match image
        c.height = this.naturalHeight;
        ctx.drawImage(this, 0, 0); // draw in image
        c.toBlob((blob) => {
        // get content as PNG blob

          // call our main function
          handleFiles([blob]);
        }, 'image/png');
      };
      img.onerror = function () {
        alert('Error in uploading');
      };
      img.crossOrigin = ''; // if from different origin
      img.src = url;
    }
  }

  dropRegion.addEventListener('drop', handleDrop, false);

  function handleFiles(files) {
    for (let i = 0, len = files.length; i < len; i++) {
      if (validateImage(files[i])) previewImage(files[i]);
    }
  }

  function validateImage(image) {
  // check the type
    const validTypes = ['image/jpeg', 'image/png', 'image/gif'];
    if (validTypes.indexOf(image.type) === -1) {
      alert('Invalid File Type');
      return false;
    }

    // check the size
    const maxSizeInBytes = 10e6; // 10MB
    if (image.size > maxSizeInBytes) {
      alert('File too large');
      return false;
    }

    return true;
  }
  // container
  const imgView = document.createElement('div');
  imgView.className = 'image-view';
  imagePreviewRegion.appendChild(imgView);

  // previewing image
  const img = document.createElement('img');
  img.setAttribute('id', 'prevmage');
  img.className = 'rounded';
  imgView.appendChild(img);

  function previewImage(image) {
  // read the image...
    const reader = new FileReader();
    reader.onload = function (e) {
      img.src = e.target.result;
    };
    reader.readAsDataURL(image);
  }
}
