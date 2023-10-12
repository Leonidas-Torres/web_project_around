function hiddenOutlined(event) {
  const currentCard = event.target.closest(".cards__grid");
  const likeButtonOutlined = currentCard.querySelector(
    ".cardslike-button_type_outlined"
  );
  const likeButtonFilled = currentCard.querySelector(
    ".cardslike-button_type_filled"
  );
  likeButtonOutlined.style.display = "none";
  likeButtonFilled.style.display = "inline";
}

function hiddenFilled(event) {
  const currentCard = event.target.closest(".cards__grid");
  const likeButtonOutlined = currentCard.querySelector(
    ".cardslike-button_type_outlined"
  );
  const likeButtonFilled = currentCard.querySelector(
    ".cardslike-button_type_filled"
  );
  likeButtonOutlined.style.display = "inline";
  likeButtonFilled.style.display = "none";
}

const popupSelector = document.querySelector(".profile__button");
