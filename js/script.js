// Анимация формы
var link = document.querySelector(".button-popup");
var popup = document.querySelector(".search-for-hotels");

popup.classList.add("invisible");

// Проверка формы
var form = popup.querySelector("form");
var arival = popup.querySelector("[name=dateArrival]");
var departure = popup.querySelector("[name=dateDeparture]");
var adults = popup.querySelector("[name=numAdults]");
var children = popup.querySelector("[name=numChildren]");

// На случай исключения
var isStorageSupport = true;
var storageAd = "";
var storageCh = "";

try {
  storageAd = localStorage.getItem("adults");
  storageCh = localStorage.getItem("children");
} catch (err) {
  isStorageSupport = false;
}

// Анимация
link.addEventListener("click", function (evt) {
  evt.preventDefault();
  popup.classList.toggle("invisible");
  popup.classList.remove("error");
});

// Проверка формы
form.addEventListener("submit", function (evt) {
  if (!arival.value || !departure.value || !adults.value || !children.value) {
    evt.preventDefault();
    popup.classList.remove("error");
    popup.offsetWidth = popup.offsetWidth;
    popup.classList.add("error");
  } else if (isStorageSupport) {
    localStorage.setItem("adults", adults.value);
    localStorage.setItem("children", children.value);
  }
});
