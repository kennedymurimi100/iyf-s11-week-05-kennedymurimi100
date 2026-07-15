// getElementById - returns one element
const header = document.getElementById("main-header");
console.log("getElementById:", header);

// getElementsByClassName - returns an HTMLCollection
const contents = document.getElementsByClassName("content");
console.log("getElementsByClassName:", contents);

// getElementsByTagName - returns an HTMLCollection
const paragraphs = document.getElementsByTagName("p");
console.log("getElementsByTagName:", paragraphs);

// querySelector - returns the first matching element
const firstLink = document.querySelector(".nav-link");
console.log("querySelector:", firstLink);

// querySelectorAll - returns all matching elements
const allLinks = document.querySelectorAll(".nav-link");
console.log("querySelectorAll:", allLinks);

// 1. Select the h1 element
const heading = document.querySelector("h1");
console.log("H1:", heading);

// 2. Select all elements with class "content"
const allContent = document.querySelectorAll(".content");
console.log("All content paragraphs:", allContent);

// 3. Select the form
const form = document.getElementById("contact-form");
console.log("Form:", form);

// 4. Select the email input
const emailInput = document.getElementById("email");
console.log("Email Input:", emailInput);

// 5. Select all list items in the navigation
const navItems = document.querySelectorAll("nav li");
console.log("Navigation Items:", navItems);

// 6. Select the first navigation link
const firstNavLink = document.querySelector(".nav-link");
console.log("First Nav Link:", firstNavLink);

// 7. Select the last paragraph
const lastParagraph = document.querySelector("p:last-of-type");
console.log("Last Paragraph:", lastParagraph);

// Select the nav element
const nav = document.querySelector("nav");

// Parent
console.log("Parent Element:");
console.log(nav.parentElement);

// Children
console.log("Children:");
console.log(nav.children);

console.log("First Child:");
console.log(nav.firstElementChild);

console.log("Last Child:");
console.log(nav.lastElementChild);

// Siblings
const article = document.querySelector("article");

console.log("Next Sibling:");
console.log(article.nextElementSibling);

console.log("Previous Sibling:");
console.log(article.previousElementSibling);

// Descendants
const navLinks = nav.querySelectorAll("a");

console.log("All Nav Links:");
console.log(navLinks);

// Practice 1
const headerElement = document.getElementById("main-header");
const navigation = headerElement.querySelector("nav");

console.log("Navigation inside header:");
console.log(navigation);


// Practice 2
const firstLinkInPractice = document.querySelector(".nav-link");
const parentListItem = firstLinkInPractice.parentElement;

console.log("Parent LI:");
console.log(parentListItem);

// Practice 3
const articleElement = document.querySelector("article");
const nextSection = articleElement.nextElementSibling;

console.log("Section after article:");
console.log(nextSection);


// Practice 4
const ul = document.querySelector(".nav-list");
const listItems = ul.children;

console.log("All List Items:");
console.log(listItems);

// Practice 5
const footer = document.querySelector("footer");

console.log("Footer:");
console.log(footer);

console.log("Parent of Footer:");
console.log(footer.parentElement);

console.log("Body:");
console.log(footer.parentElement);

// =============================
// MODIFYING TEXT CONTENT
// =============================

const h1 = document.querySelector("h1");

// Read the text
console.log("textContent:", h1.textContent);
console.log("innerText:", h1.innerText);

// Change the text
h1.textContent = "Welcome to DOM Manipulation";

// =============================
// READING HTML
// =============================

const articleForReading = document.querySelector("article");

console.log(articleForReading.innerHTML);

// =============================
// REPLACE HTML
// =============================

// articleForReading.innerHTML = `
//     <h2>Updated Article</h2>
//     <p>This is new content.</p>
// `;

while (articleForReading.firstChild) {
    articleForReading.removeChild(articleForReading.firstChild);
}

// =============================
// SAFE TEXT
// =============================

const userInput = "<script>alert('hack!')</script>";

// Keep the article content and do not overwrite it with unsafe user input.
console.log("Sanitized user input:", userInput);

// =============================
// ATTRIBUTES
// =============================

const link = document.querySelector(".nav-link");

// Read the href attribute
console.log(link.getAttribute("href"));

// Read the href property
console.log(link.href);

// Change the link destination
link.setAttribute("href", "https://example.com");

// Another way
link.href = "https://example.com";

console.log(link.hasAttribute("target"));

link.removeAttribute("target");

// =============================
// STYLES
// =============================

const container = document.querySelector(".container");

// Change individual styles
container.style.backgroundColor = "#f0f0f0";
container.style.padding = "30px";
container.style.borderRadius = "8px";

// Change multiple styles at once
Object.assign(container.style, {
    backgroundColor: "#333",
    color: "white",
    padding: "20px"
});

// =============================
// CREATING ELEMENTS
// =============================

// Create a new paragraph
const newParagraph = document.createElement("p");

// Add text
newParagraph.textContent = "This is a new paragraph!";

// Add CSS classes
newParagraph.className = "content highlight";

// Find the article
const articleForInsert = document.querySelector("article");

// Add the paragraph at the end
const firstParagraph = articleForInsert.querySelector("p");

articleForInsert.prepend(newParagraph);
// Option 2: articleForInsert.append(newParagraph);
// Option 3: firstParagraph.before(newParagraph);
// Option 4: firstParagraph.after(newParagraph);

// =============================
// REMOVING ELEMENTS
// =============================

// Select the footer
const footerToRemove = document.querySelector("footer");

// Remove it from the page
footerToRemove.remove();

// Select the navigation
const navRemover = document.querySelector("nav");

// Select the last list item
const lastLink = navRemover.querySelector("li:last-child");

// Remove it
lastLink.parentElement.removeChild(lastLink);

// =============================
// CLONING ELEMENTS
// =============================

// Select the first navigation item (the <li>)
const navItem = document.querySelector(".nav-link").parentElement;

// Clone it
const clone = navItem.cloneNode(true);

// Change its text
clone.querySelector("a").textContent = "New Link";

// Add it to the navigation list
document.querySelector(".nav-list").appendChild(clone);


function addNavItem(text, href) {
    // Create a new list item
    const li = document.createElement("li");

    // Create a new link
    const a = document.createElement("a");

    // Set the link text
    a.textContent = text;

    // Set the link destination
    a.href = href;

    // Give it the same class as the others
    a.className = "nav-link";

    // Put the link inside the list item
    li.appendChild(a);

    // Add the list item to the navigation
    document.querySelector(".nav-list").appendChild(li);
}

addNavItem("Blog", "/blog");
addNavItem("Portfolio", "/portfolio");

// =============================
// EVENT LISTENERS
// =============================

// Create a button
const button = document.createElement("button");

// Give it some text
button.textContent = "Click Me";

// Add it to the page
document.body.appendChild(button);


button.addEventListener("click", function () {
    console.log("Button clicked!");
});

button.addEventListener("click", () => {
    console.log("Clicked again!");
});

// Mouse Events
button.addEventListener("click", handler);
button.addEventListener("dblclick", handler);
button.addEventListener("mouseenter", handler);
button.addEventListener("mouseleave", handler);
button.addEventListener("mousemove", handler);

const nameInput = document.getElementById("name");
nameInput.addEventListener("keydown", handler);
nameInput.addEventListener("keyup", handler);
nameInput.addEventListener("focus", handler);
nameInput.addEventListener("blur", handler);
nameInput.addEventListener("input", handler);
nameInput.addEventListener("change", handler);

const contactForm = document.getElementById("contact-form");
contactForm.addEventListener("submit", function (event) {

    event.preventDefault();

    const formData = new FormData(contactForm);

    const data = Object.fromEntries(formData);

    if (data.name.length >= 2 && data.email.includes("@")) {

        console.log("✅ Form submitted successfully!");

        contactForm.reset();

    } else {

        console.log("❌ Please complete the form correctly.");

    }

});

window.addEventListener("load", handler);

window.addEventListener("resize", handler);

window.addEventListener("scroll", handler);

// =============================
// NAMED EVENT HANDLER
// =============================

function handleClick() {
    console.log("Handled!");
}

button.addEventListener("click", handleClick);

button.removeEventListener("click", handleClick);


// =============================
// EVENT TYPES
// =============================

function handler(event) {
    console.log("Event:", event.type);
}

// =============================
// CLICK COUNTER
// =============================

// Create a heading to display the count
const counterDisplay = document.createElement("h2");

// Start the count at 0
let count = 0;

// Show the count on the page
counterDisplay.textContent = count;

// Add it to the page
document.body.appendChild(counterDisplay);

// Create buttons
const increaseBtn = document.createElement("button");
increaseBtn.textContent = "+";

const decreaseBtn = document.createElement("button");
decreaseBtn.textContent = "-";

const resetBtn = document.createElement("button");
resetBtn.textContent = "Reset";

// Add buttons to the page
document.body.appendChild(increaseBtn);
document.body.appendChild(decreaseBtn);
document.body.appendChild(resetBtn);

increaseBtn.addEventListener("click", function () {
    count++;
    counterDisplay.textContent = count;
});

decreaseBtn.addEventListener("click", function () {
    if (count > 0) {
        count--;
        counterDisplay.textContent = count;
    }
});

resetBtn.addEventListener("click", function () {
    count = 0;
    counterDisplay.textContent = count;
});

// =============================
// THE EVENT OBJECT
// =============================

document.addEventListener("click", function (event) {

    console.log("Target:", event.target);

    console.log("Current Target:", event.currentTarget);

    console.log("Type:", event.type);

    console.log("Position:", event.clientX, event.clientY);

});

document.addEventListener("click", function (event) {

    event.preventDefault();

});

document.addEventListener("click", function (event) {

    event.stopPropagation();

});

document.addEventListener("keydown", function (event) {

    console.log("Key:", event.key);

    console.log("Code:", event.code);

    console.log("Shift:", event.shiftKey);

    console.log("Ctrl:", event.ctrlKey);

    console.log("Alt:", event.altKey);

});

// =============================
// EVENT BUBBLING
// =============================

document.getElementById("grandparent").addEventListener("click", () => {
    console.log("Grandparent clicked");
});

document.getElementById("parent").addEventListener("click", () => {
    console.log("Parent clicked");
});

document.getElementById("child").addEventListener("click", () => {
    console.log("Child clicked");
});

document.querySelector(".nav-list").addEventListener("click", function (event) {

    if (event.target.matches("a")) {
        if (event.target.textContent.trim() === "Home") {
            console.log("clickedhome");
        } else {
            console.log("You clicked:", event.target.textContent);
        }
    }

});

// =============================
// FORM HANDLING
// =============================

const formElement = document.getElementById("contact-form");

const nameInputElement = document.getElementById("name");

const emailInputElement = document.getElementById("email");

// Validate the name while typing
nameInputElement.addEventListener("input", function (event) {

    const value = event.target.value;

    if (value.length < 2) {

        console.log("❌ Name is too short");

    } else {

        console.log("✅ Name looks good");

    }

});

// =============================
// TODO LIST PROJECT
// =============================

const todoForm = document.getElementById("todo-form");

const todoInput = document.getElementById("todo-input");

const taskInput = todoInput;

const todoList = document.getElementById("todo-list");

const itemsLeft = document.getElementById("itemsLeft");

const deleteAllBtn = document.getElementById("deleteAllBtn");
const allBtn = document.getElementById("allBtn");
const activeBtn = document.getElementById("activeBtn");
const completedBtn = document.getElementById("completedBtn");
const clearCompletedBtn = document.getElementById("clearCompletedBtn");

const taskList = todoList;

let todos = [];
let currentFilter = "all";

function addTask() {
    if (taskInput.value.trim() === "") {
        alert("Please enter a task.");
        return;
    }

    const task = todoInput.value.trim();

    if (task === "") {
        return;
    }

    todos.push({ text: task, completed: false });

    todoInput.value = "";

    renderTodos();
}

function updateTaskCount() {
    const total = todos.length;
    const completed = todos.filter(function (todo) {
        return todo.completed;
    }).length;
    const remaining = total - completed;

    itemsLeft.textContent = `${remaining} items left`;
}

function saveTasks() {
    localStorage.setItem("tasks", JSON.stringify(todos));
}

function loadTasks() {
    const savedTasks = localStorage.getItem("tasks");

    if (savedTasks) {
        try {
            const parsed = JSON.parse(savedTasks);
            if (Array.isArray(parsed)) {
                todos = parsed.map(function (todo) {
                    return {
                        text: todo.text || "",
                        completed: Boolean(todo.completed)
                    };
                });
            }
        } catch (error) {
            console.warn("Failed to load saved tasks:", error);
            todos = [];
        }
    }

    renderTodos();
}

allBtn.addEventListener("click", function () {
    currentFilter = "all";
    renderTodos();
});

activeBtn.addEventListener("click", function () {
    currentFilter = "active";
    renderTodos();
});

completedBtn.addEventListener("click", function () {
    currentFilter = "completed";
    renderTodos();
});

clearCompletedBtn.addEventListener("click", function () {
    todos = todos.filter(function (todo) {
        return !todo.completed;
    });

    renderTodos();
});

deleteAllBtn.addEventListener("click", function () {
    const confirmDelete = confirm("Are you sure you want to delete all tasks?");

    if (confirmDelete) {
        todos = [];
        renderTodos();
        saveTasks();
    }
});

function renderTodos() {
    todoList.innerHTML = "";

    const tasksToShow = todos
        .map(function (todo, index) {
            return { todo: todo, index: index };
        })
        .filter(function (item) {
            if (currentFilter === "completed") {
                return item.todo.completed;
            }
            if (currentFilter === "active") {
                return !item.todo.completed;
            }
            return true;
        });

    tasksToShow.forEach(function (item) {
        const li = document.createElement("li");
        li.classList.add("task");

        const taskText = document.createElement("span");
        taskText.textContent = item.todo.text;
        if (item.todo.completed) {
            taskText.classList.add("completed");
        }

        const completeBtn = document.createElement("button");
        completeBtn.textContent = item.todo.completed ? "Undo" : "Complete";

        completeBtn.addEventListener("click", function () {
            todos[item.index].completed = !todos[item.index].completed;
            renderTodos();
            saveTasks();
        });

        const deleteBtn = document.createElement("button");
        deleteBtn.textContent = "Delete";
        deleteBtn.classList.add("delete-btn");

        deleteBtn.addEventListener("click", function () {
            todos.splice(item.index, 1);
            renderTodos();
            saveTasks();
        });

        li.appendChild(taskText);
        li.appendChild(completeBtn);
        li.appendChild(deleteBtn);

        todoList.appendChild(li);
    });

    updateTaskCount();
    saveTasks();
}

todoForm.addEventListener("submit", function (event) {

    event.preventDefault();

    addTask();

});

updateTaskCount();
loadTasks();


