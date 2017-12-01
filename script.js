var pictures = document.getElementById("pictures"),
    bigPicture = document.getElementById("big-picture");

var images = ["1", "2", "3", "4", "5", "6"];

function buildGallery(picture) {
    "use strict";
    var thumbnail = document.createElement("img");
    thumbnail.setAttribute('src', 'img/' + images[picture] + '.jpg');
    thumbnail.classList.add("thumbnail");
    pictures.appendChild(thumbnail);
}
for (i = 0; i < images.length; i++) {
    buildGallery(i);
}
