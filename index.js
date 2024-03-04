document.addEventListener("DOMContentLoaded", function () {
  ImagePopup();
  window.onclick = function (event) {
    if (event.target.classList.contains("modal")) {
      event.target.style.display = "none";
    }
  };
  window.hiddenOutlined = function (event) {
    const currentCard = event.target.closest(".cards__grid");
    const likeButtonOutlined = currentCard.querySelector(
      ".cards__button_type_outlined"
    );
    const likeButtonFilled = currentCard.querySelector(
      ".cards__button_type_filled"
    );
    likeButtonOutlined.style.display = "none";
    likeButtonFilled.style.display = "inline";
  };

  window.hiddenFilled = function (event) {
    const currentCard = event.target.closest(".cards__grid");
    const likeButtonOutlined = currentCard.querySelector(
      ".cards__button_type_outlined"
    );
    const likeButtonFilled = currentCard.querySelector(
      ".cards__button_type_filled"
    );
    likeButtonOutlined.style.display = "inline";
    likeButtonFilled.style.display = "none";
  };

  const modal = document.getElementById("myModal");
  const btn = document.getElementById("profile-button");
  const span = document.getElementsByClassName("modal__content-close")[0];

  btn.onclick = function () {
    modal.style.display = "block";
    const name = document.getElementById("name");
    const about = document.getElementById("about");
    const profileName = document.getElementById("profile-name");
    const profileJob = document.getElementById("profile-job");
    name.value = profileName.textContent;
    about.value = profileJob.textContent;
  };

  span.onclick = function () {
    modal.style.display = "none";
  };

  window.onclick = function (event) {
    if (event.target === modal) {
      modal.style.display = "none";
    }
  };

  const saveButton = document.getElementById("save-button");
  saveButton.onclick = function () {
    const name = document.getElementById("name");
    const about = document.getElementById("about");
    const profileName = document.getElementById("profile-name");
    const profileJob = document.getElementById("profile-job");
    profileName.textContent = name.value;
    profileJob.textContent = about.value;
    modal.style.display = "none";
  };
  // Modal con el formulario para agregar imagen
  const btnModal_add = document.querySelector("#image-button");
  const cont_modal = document.querySelector("#modal_add");
  const nombreInput = document.querySelector("#name_add");
  const imagenInput = document.querySelector("#image_add");
  const spanImage = document.getElementsByClassName("modal__content-close")[1];

  spanImage.onclick = function () {
    cont_modal.style.display = "none";
  };

  window.onclick = function (event) {
    if (event.target === cont_modal) {
      cont_modal.style.display = "none";
    }
  };

  btnModal_add.onclick = function () {
    cont_modal.style.display = "block";
  };

  document.querySelector("#save-button-add").onclick = function () {
    Form();
  };

  //función para agregar imagen desde el formulario
  function Form() {
    const nombre = nombreInput.value.trim();
    if (nombre === "") {
      alert("Agregue un nombre");
      return;
    }

    const imagenUrl = imagenInput.value.trim();
    if (!imagenUrl) {
      alert("Ingrese una URL de una imagen");
      return;
    }

    const imageUrl = imagenInput.value.trim();
    const nuevaTarjeta = document.createElement("div");
    nuevaTarjeta.classList.add("cards__grid");

    nuevaTarjeta.innerHTML = `
      <img class="cards__image" src="${imageUrl}" alt="${nombre}">
      <img class="cards__trash-bin" src="./images/trash.svg" alt="Botón de eliminar" onclick="this.parentElement.remove();">
      <div class="cards__card-name">
        <div class="cards__text-button">
          <h3 class="cards__name">${nombre}</h3>
          <img class="cards__button cards__button_type_outlined" src="./images/like.svg" alt="Botón de me gusta" onclick="window.hiddenOutlined(event)">
          <img class="cards__button cards__button_type_filled" src="./images/like-filled.svg" alt="Botón de me gusta lleno" onclick="window.hiddenFilled(event)" style="display: none;">
        </div>
      </div>`;

    const cardsSection = document.querySelector("#cards");
    cardsSection.appendChild(nuevaTarjeta);

    cont_modal.style.display = "none";
    nombreInput.value = "";
    imagenInput.value = null;

    ImagePopup();
  }

  function ImagePopup() {
    const images = document.querySelectorAll(".cards__image");
    const popup = document.getElementById("image-popup");
    const popupImg = document.getElementById("popup-img");

    images.forEach((image) => {
      image.addEventListener("click", function () {
        popupImg.src = this.src;
        popup.style.display = "flex";
      });
    });
    popup.addEventListener("click", function () {
      popup.style.display = "none";
    });
  }
});
