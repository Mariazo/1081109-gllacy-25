var link = document.querySelector(".callback-form-button");
var popup = document.querySelector(".modal-mask");
var close = popup.querySelector(".modal-close");
var form = popup.querySelector("form");
var user = popup.querySelector("[name=feedback-name]");
var email = popup.querySelector("[name=feedback-email]");

var isStorageSupport = true;
var storage = "";

try {
  storage = localStorage.getItem("email");
} catch (err) {
  isStorageSupport = false;
}

link.addEventListener("click", function(evt) {
  evt.preventDefault();
  popup.classList.add("modal-show");
  if (storage) {
    user.value = storage;
    email.focus();
  } else {
    user.focus();
  }
});

close.addEventListener("click", function(evt) {
  evt.preventDefault();
  popup.classList.remove("modal-show");
});

form.addEventListener("submit", function(evt) {
  if (!user.value || !email.value) {
    evt.preventDefault();
    console.log("Нужно ввести имя и электронный адрес");
  } else {
    if (isStorageSupport) {
      localStorage.setItem("email", email.value);
    }
  }
});

window.addEventListener("keydown", function(evt) {
  if (evt.keyCode === 27) {
    evt.preventDefault();
    if (popup.classList.contains("modal-show")) {
      popup.classList.remove("modal-show");
    }
  }
});
