var link = document.querySelector(".feedback-form"); 
var popup = document.querySelector(".feedback-popup-hidden"); 
var close = popup.querySelector(".feedback-cross");
var form = popup.querySelector("form");
var login = popup.querySelector("[name=feedback-name]"); 
var email = popup.querySelector("[name=feedback-email]"); 
var text = popup.querySelector("[name=feedback-text]"); 
var isStorageSupport = true;
var storage = "";
try {
    storage = localStorage.getItem("login");
} catch (err) {
    isStorageSupport = false;
}
link.addEventListener("click", function (evt) {
    evt.preventDefault();
    popup.classList.add("modal-show");
    if (storage) {
        login.value = storage;
        email.focus();
    } else {
        login.focus();
    }
});
close.addEventListener("click", function (evt) {
    evt.preventDefault();
    popup.classList.remove("modal-show");
    popup.classList.remove("modal-error");
});
form.addEventListener("submit", function (evt) {
    if (!login.value || !email.value || !text.value) {
        evt.preventDefault();
        popup.classList.remove("modal-error");
        popup.offsetWidth = popup.offsetWidth;
        popup.classList.add("modal-error");
    } else {
        if (isStorageSupport) {
            localStorage.setItem("login", login.value);
        }
    }
});
window.addEventListener("keydown", function (evt) {
    if (evt.keyCode === 27) {
        if (popup.classList.contains("modal-show")) {
            evt.preventDefault();
            popup.classList.remove("modal-show");
            popup.classList.remove("modal-error");
        }
    }
});


function initMap() {
    map = new google.maps.Map(document.getElementById("map-googl"), {
      center: { lat: 59.939201, lng: 30.328302 },
      zoom: 16,
      disableDefaultUI: true
    });

    var myLatLng = new google.maps.LatLng(59.938531, 30.323055);
    var marker = new google.maps.Marker({
      position: myLatLng,
      map: map,
      animation: google.maps.Animation.DROP,
      icon: "img/icon-map.png"
    });

  }





