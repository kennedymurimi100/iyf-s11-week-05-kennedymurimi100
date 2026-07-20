const addParagraphBtn = document.getElementById("addParagraphBtn");
const paragraphContainer = document.getElementById("paragraphContainer");

let paragraphCount = 0;

addParagraphBtn.addEventListener("click", function () {
    paragraphCount++;

    const paragraph = document.createElement("p");
    const deleteBtn = document.createElement("button");
    const wrapper = document.createElement("div");

    paragraph.textContent = "Paragraph " + paragraphCount;
    deleteBtn.textContent = "Delete";

    wrapper.appendChild(paragraph);
    wrapper.appendChild(deleteBtn);

    deleteBtn.addEventListener("click", function () {
    wrapper.remove();
});

    paragraphContainer.appendChild(wrapper);

    console.log(paragraphCount);
});