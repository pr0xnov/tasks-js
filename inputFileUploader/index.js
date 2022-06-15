const inputFile = document.getElementById("inputFile");
const errorMessage = document.getElementById("errorMessage");
const imagePreview = document.getElementById("preview");

inputFile.addEventListener("change", () => {
  const file = document.querySelector("input[type=file]").files[0];
  if (!file) {
    return;
  }
  previewImage(file);
});

function previewImage(file) {
  const reader = new FileReader();
  const isImageJpeg = file.type === "image/jpeg";
  const isImageJpg = file.type === "image/jpg";
  const isImageGif = file.type === "image/gif";
  const isImagePng = file.type === "image/png";
  // PREVIEW
  reader.addEventListener("load", function () {
    imagePreview.src = reader.result;
  });

  if (isImageJpeg || isImageJpg || isImageGif || isImagePng) {
    reader.readAsDataURL(file);
    errorMessage.innerText = "";
  } else {
    errorMessage.innerText = "File type should be an image";
    imagePreview.src = "";
  }
}
