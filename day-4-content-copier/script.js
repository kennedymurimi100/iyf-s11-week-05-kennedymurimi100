const source = document.getElementById("source");
const target = document.getElementById("target");
const copyBtn = document.getElementById("copyBtn");

copyBtn.addEventListener("click", function () {
    target.textContent = source.textContent;
});