// == Обратная связь ==
if (document.querySelector(".modal-feedback")) {
  var link = document.querySelector(".contacts__btn-js");
      popup = document.querySelector(".modal-feedback");
      close = popup.querySelector(".js-btn-close");
      overlay = document.querySelector(".modal-feedback__overlay");
      submit = popup.querySelector(".modal-feedback__btn");
      username = popup.querySelector("[name=username]");
      email = popup.querySelector("[name=email]");
      comment = popup.querySelector("[name=comment]");
      storage_user = localStorage.getItem("username");
      storage_email = localStorage.getItem("email");

  link.addEventListener("click", function (a) {
  a.preventDefault();
  popup.classList.add("modal-feedback--show");
  overlay.classList.add("modal-feedback--overlay-show");
  storage_user && storage_email ? (username.value = storage_user, email.value = storage_email, comment.focus()) : username.focus();
  });

  close.addEventListener("click", function (a) {
  a.preventDefault();
  popup.classList.remove("modal-feedback--show");
  popup.classList.remove("modal-feedback--error");
  overlay.classList.remove("modal-feedback--overlay-show");
  });

  submit .addEventListener("click", function (a) {
  username.value && email.value && comment.value ? (localStorage.setItem("username", username.value), localStorage.setItem("email", email.value)) : (a.preventDefault(), popup.classList.remove("modal-feedback--error"),popup.offsetWidth = popup.offsetWidth, popup.classList.add("modal-feedback--error"));
  });

  window.addEventListener("keydown", function (a) {
  27 === a.keyCode && popup.classList.contains("modal-feedback--show") && (popup.classList.remove("modal-feedback--show"), popup.classList.remove("modal-feedback--error"), overlay.classList.remove("modal-feedback--overlay-show"));
  });

  overlay.addEventListener("click", function (a) {
  popup.classList.contains("modal-feedback--show") && (popup.classList.remove("modal-feedback--show"), popup.classList.remove("modal-feedback--error"), overlay.classList.remove("modal-feedback--overlay-show"));
  });
}

// == Окно "Добавлено в корзину" ==
if(document.querySelector(".modal-cart")) {
  var basket = document.querySelector(".modal-cart");
  var linksBuy = document.querySelectorAll(".product-popular__btn-buy");
  var basketClose = basket.querySelector(".js-close-cart");
  var continueShop = basket.querySelector(".modal-cart__btn--js");

  // Popup "Товар добавлен в корзину"
  for (i = 0; i < linksBuy.length; i++) {
      linksBuy[i].addEventListener("click", function (event) {
          event.preventDefault();
          basket.classList.add("modal-cart--show");
      })
  };
  //закрытие попапа по Х
  basketClose.addEventListener("click", function (event) {
      event.preventDefault();
      basket.classList.remove("modal-cart--show");
  });
  //закрыnие попапа по кнопке "продолжить"
  continueShop.addEventListener("click", function (event) {
      event.preventDefault();
      basket.classList.remove("modal-cart--show");
  });
}

// == Открытие карты ==
if (document.querySelector(".map")) {
  var mapOpen = document.querySelector(".js-open-map");
  var mapPopup = document.querySelector(".map");
  var mapClose = mapPopup.querySelector(".js-close-map");

  mapOpen.addEventListener("click", function (event) {
    event.preventDefault();
    mapPopup.classList.add("map--show");
  });

  mapClose.addEventListener("click", function (event) {
    event.preventDefault();
    mapPopup.classList.remove("map--show");
  });

  window.addEventListener("keydown", function(event) {
    if (event.keyCode == 27) {
      if (mapPopup.classList.contains("map--show")) {
        mapPopup.classList.remove("map--show");
      }
    }
  });
}
