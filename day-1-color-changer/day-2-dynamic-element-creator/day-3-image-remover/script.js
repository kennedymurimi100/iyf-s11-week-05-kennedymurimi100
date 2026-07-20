const removeImagesBtn = document.getElementById("removeImagesBtn");
const images = document.querySelectorAll("img");

let imagesVisible = true;
removeImagesBtn.addEventListener("click", function () {

    if (imagesVisible) {

        images.forEach(function (image) {
    image.style.display = "none";
});

imagesVisible = false;

    } else {

        images.forEach(function (image) {
    image.style.display = "block";
});

imagesVisible = true;

    }

});
