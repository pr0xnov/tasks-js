const inputFile = document.getElementById("inputFile");
const errorMessage = document.getElementById("errorMessage");
const imagePreview = document.getElementById("preview");

inputFile.addEventListener("change", () => {
  const files = document.querySelector("input[type=file]").files[0];
  if (files != inputFile) {
    return previewImage(files);
  }
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

  if (file) {
    if (isImageJpeg || isImageJpg || isImageGif || isImagePng) {
      reader.readAsDataURL(file);
      errorMessage.innerText = "";
    } else {
      errorMessage.innerText = "File type should be an image";
      imagePreview.src = "";
    }
  }
}
