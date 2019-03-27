var link = document.querySelector(".button-map");
var popup = document.querySelector(".modal-letter");
var close = document.querySelector(".modal-close");

var buyBtns = document.querySelectorAll(".button-green-buy");
var basket = document.querySelector(".modal-productbasket");
var nextBuy = document.querySelector(".button-order");

if (link) {
  link.addEventListener("click", function (evt) {
    evt.preventDefault();
    popup.classList.add("modal-show");
  });

  close.addEventListener("click", function (evt) {
    evt.preventDefault();
    popup.classList.remove("modal-show");
  });

} if (buyBtns) {

  buyBtns.forEach(function (buyBtn) {
    buyBtn.addEventListener("click", function (evt) {
      evt.preventDefault();
      basket.classList.add("modal-show");
    });
  });

  close.addEventListener("click", function (evt) {
    evt.preventDefault();
    basket.classList.remove("modal-show");
  });

  nextBuy.addEventListener("click", function (evt) {
    evt.preventDefault();
    basket.classList.remove("modal-show");
  });
}

