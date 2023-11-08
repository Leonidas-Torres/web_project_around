function hiddenOutlined(event) {
  const currentCard = event.target.closest(".cards__grid");
  const likeButtonOutlined = currentCard.querySelector(
    ".cards__button_type_outlined"
  );
  const likeButtonFilled = currentCard.querySelector(
    ".cards__button_type_filled"
  );
  likeButtonOutlined.style.display = "none";
  likeButtonFilled.style.display = "inline";
}

function hiddenFilled(event) {
  const currentCard = event.target.closest(".cards__grid");
  const likeButtonOutlined = currentCard.querySelector(
    ".cards__button_type_outlined"
  );
  const likeButtonFilled = currentCard.querySelector(
    ".cards__button_type_filled"
  );
  likeButtonOutlined.style.display = "inline";
  likeButtonFilled.style.display = "none";
}

const popupSelector = document.querySelector(".profile__button");

const modal = document.getElementById("myModal");

const btn = document.getElementById("profile-button");

const span = document.getElementsByClassName("modal-content__close")[0];

btn.onclick = function () {
  modal.style.display = "block";
  const name = document.getElementById("name");
  const about = document.getElementById("about");
  const profileName = document.getElementById("profile-name");
  const profileJob = document.getElementById("profile-job");
  name.value = profileName.innerHTML;
  about.value = profileJob.innerHTML;
};

span.onclick = function () {
  modal.style.display = "none";
};

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