const btnShareDesktop = document.querySelector("#btn-share--desktop");
const btnShareMobile = document.querySelector("#btn-share--mobile");
const popup = document.querySelector(".popup");
const iconShareDesk = document.querySelector(".icon-share--desktop");
const iconShareMobile = document.querySelector(".icon-share--mobile");

function showDesktopPopup() {
  popup.classList.toggle("show-popup");
  btnShareDesktop.classList.toggle("btn-darker");
  iconShareDesk.classList.toggle("icon-white");
}

function showMobilePopup() {
  popup.classList.toggle("show-popup");
  btnShareDesktop.classList.add("hide");
  btnShareMobile.classList.add("btn-darker");
  iconShareMobile.classList.add("icon-white");
}

btnShareDesktop.addEventListener("click", function () {
  if (window.innerWidth <= 600) {
    showMobilePopup();
  } else {
    showDesktopPopup();
  }
});

btnShareMobile.addEventListener("click", function () {
  popup.classList.remove("show-popup");
  btnShareDesktop.classList.remove("hide");
});
