var link = document.querySelector(".button-map");
var popup = document.querySelector(".modal-letter");
var close = document.querySelector(".modal-close");
var buy = document.querySelector(".button-green-buy");
var basket = document.querySelector("modal-productbasket");

link.addEventListener("click", function (evt) {
  evt.preventDefault();
  popup.classList.add("modal-show");
});

buy.addEventListener("click", function (evt) {
  evt.preventDefault();
  basket.classList.add("modal-show");
});

close.addEventListener("click", function (evt) {
  evt.preventDefault();
  popup.classList.remove("modal-show");
});