const input = document.querySelector("#input");
const output = document.querySelector("#output");
const noItems = document.createElement("p");
noItems.textContent = "No items yet.";
noItems.className = "no-items";

loadFromLocalStorage();

function addItem(text) {
    const main = document.createElement("div");
    main.className = "main";

    const item = document.createElement("li");
    item.textContent = text || input.value;
    item.addEventListener("click", toggleChecked);

    const deleteButton = document.createElement("button");
    deleteButton.textContent = "X";
    deleteButton.className = "delete";
    deleteButton.addEventListener("click", deleteItem);

    main.appendChild(item);
    main.appendChild(deleteButton);
    output.appendChild(main);
}

function handleInput() {
    const value = input.value.trim();
    if (value === "") {
        alert("Please enter a valid name.");
        return;
    }

    addItem();
    input.value = "";
    updateEmptyState();
    saveToLocalStorage();
}

function deleteItem() {
    const item = this.parentElement;
    item.remove();
    updateEmptyState();
    saveToLocalStorage();
}

function toggleChecked(event) {
    event.target.classList.toggle("checked");
    saveToLocalStorage();
}

function saveToLocalStorage() {
    localStorage.setItem("asz", output.innerHTML);
}

function loadFromLocalStorage() {
    const saved = localStorage.getItem("asz");
    if (saved) {
        output.innerHTML = saved;

        // إعادة تفعيل الأحداث بعد تحميل العناصر
        const items = output.querySelectorAll("li");
        items.forEach(item => {
            item.addEventListener("click", toggleChecked);
        });

        const deleteButtons = output.querySelectorAll(".delete");
        deleteButtons.forEach(button => {
            button.addEventListener("click", deleteItem);
        });
    }

    updateEmptyState();
}

function updateEmptyState() {
    if (output.children.length === 0) {
        output.classList.add("empty");
        if (!output.contains(noItems)) {
            output.appendChild(noItems);
        }
    } else {
        output.classList.remove("empty");
        if (output.contains(noItems)) {
            output.removeChild(noItems);
        }
    }
}
