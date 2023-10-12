document
  .querySelector(".cards__like-button")
  .addEventListener("click", function () {
    console.log("hola")
    this.classList.toggle("filled");
  });
