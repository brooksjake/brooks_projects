window.addEventListener('load', () => {
    const form = document.querySelector("#new-list-item");
    const input = document.querySelector("#new-item-input");
    const list_el = document.querySelector("#items");

    form.addEventListener('submit', (e) => {
        e.preventDefault();

        const item = input.value;

        if (!item) {
            alert("Fill out an item to submit to list");
            return;
        }

        const item_el = document.createElement("div");
        item_el.classList.add("item")
    })
})