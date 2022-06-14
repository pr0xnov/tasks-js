const img = document.getElementById("imgInp");
let errorMessage = document.getElementById("errorMessage");

const imagePreview = document.getElementById("preview");
img.addEventListener("change", (e) => {
  const imgDetails = document.querySelector("input[type=file]").files[0];
  if (imgDetails) {
    previewImage(imgDetails);
  } else {
    imagePreview.src = "";
    errorMessage.innerText = "Please select a picture";
  }
});

function previewImage(imgD) {
  const reader = new FileReader();

  // PREVIEW
  reader.addEventListener("load", function () {
    imagePreview.src = reader.result;
  });

  if (imgD) {
    if (
      imgD.type === "image/jpeg" ||
      imgD.type == "image/jpg" ||
      imgD.type == "image/gif" ||
      imgD.type == "image/png"
    ) {
      errorMessage.innerText = "";

      reader.readAsDataURL(imgD);
    } else {
      errorMessage.innerText = "File type should be an image";
      imagePreview.src = "";
    }
  } else {
    imagePreview.src = "";
    errorMessage.innerText = "Please select a picture";
  }
}
