const changeColorBtn = document.getElementById("changeColorBtn");

console.log(changeColorBtn);


const h1Headings = document.querySelectorAll("h1");
const h2Headings = document.querySelectorAll("h2");
const h3Headings = document.querySelectorAll("h3");

function getRandomColor() {
    const letters = "0123456789ABCDEF";
    let color = "#";

    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }

    return color;
}


changeColorBtn.addEventListener("click", function () {
    const randomColor = getRandomColor();

     h1Headings.forEach(function (heading) {
     heading.style.color = randomColor;
 });

     h2Headings.forEach(function (heading) {
     heading.style.color = randomColor;
});

     h3Headings.forEach(function (heading) {
     heading.style.color = randomColor;
});
});