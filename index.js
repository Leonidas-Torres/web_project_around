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

// Get the modal
const modal = document.getElementById("myModal");

// Get the button that opens the modal
const btn = document.getElementById("profile-button");

// Get the <span> element that closes the modal
const span = document.getElementsByClassName("modal-content__close")[0];

// When the user clicks the button, open the modal
btn.onclick = function () {
  modal.style.display = "block";
  const name = document.getElementById("name");
  const about = document.getElementById("about");
  const profileName = document.getElementById("profile-name");
  const profileJob = document.getElementById("profile-job");

  name.value = profileName.innerHTML;
  about.value = profileJob.innerHTML;
};

// When the user clicks on <span> (x), close the modal
span.onclick = function () {
  modal.style.display = "none";
};

// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
};

const saveButton = document.getElementById("save-button")
saveButton.onclick = function() {
  const name = document.getElementById("name");
  const about = document.getElementById("about");
  const profileName = document.getElementById("profile-name");
  const profileJob = document.getElementById("profile-job");

  profileName.innerHTML = name.value;
  profileJob.innerHTML = about.value;
  modal.style.display="none"

}