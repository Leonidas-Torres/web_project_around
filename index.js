function hiddenOutlined() {
  const likeButtonOutlined = document.querySelector(
    ".cardslike-button_type_outlined"
  );
  const likeButtonFilled = document.querySelector(
    ".cardslike-button_type_filled"
  );
  likeButtonOutlined.style.display = "none";
  likeButtonFilled.style.display = "inline";
}

function hiddenFilled() {
  const likeButtonOutlined = document.querySelector(
    ".cardslike-button_type_outlined"
  );
  const likeButtonFilled = document.querySelector(
    ".cardslike-button_type_filled"
  );
  likeButtonOutlined.style.display = "inline";
  likeButtonFilled.style.display = "none";
}

const popupSelector = document.querySelector(".profile__button");
