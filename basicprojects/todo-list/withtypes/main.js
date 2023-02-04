window.addEventListener('load', () => {
    const form = document.querySelector("#new-list-item");
    const input = document.querySelector("#new-item-input");
    const list_el = document.querySelector("#items");

    const personal_btn = document.querySelector("#personal-btn");
    const work_btn = document.querySelector("work-btn");
    const school_btn = document.querySelector("school-btn");
    const other_btn = document.querySelector("other-btn");

    let active_type = personal_btn

    personal_btn.addEventListener('click', () => {
        if (active_type != personal_btn) {
            active_type = personal_btn;
        }
        set_shadows(active_type, personal_btn, work_btn, school_btn, other_btn);
    });

    form.addEventListener('submit', (e) => {
        e.preventDefault();

        const item = input.value;

        if (!item) {
            alert("Fill out an item to submit to list");
            return;
        }

        const item_el = document.createElement("div");
        item_el.classList.add("item");

        const item_content_el = document.createElement("div");
        item_content_el.classList.add("content");

        item_el.appendChild(item_content_el);

        const item_input_el = document.createElement("input");
        item_input_el.classList.add("text");
        item_input_el.type = "text";
        item_input_el.value = item;
        item_input_el.setAttribute("readonly", "readonly");

        item_content_el.appendChild(item_input_el);

        /*----------*/
        const type_el = document.createElement("div");
        type_el.classList.add("type-circle");
        if (active_type == personal_btn) {
            type_el.classList.add("type-personal");
        } else if (active_type == work_btn) {
            type_el.classList.add("type-work");
        } else if (active_type == school_btn) {
            type_el.classList.add("type-school");
        } else if (active_type == other_btn) {
            type_el.classList.add("type-other");
        } else {
            alert("Err line 58");
        }
        item_content_el.appendChild(type_el);
        /*----------*/

        const item_actions_el = document.createElement("div");
        item_actions_el.classList.add("actions");

        const item_edit_el = document.createElement("button");
        item_edit_el.classList.add("edit")
        item_edit_el.innerHTML = "Edit";

        const item_delete_el = document.createElement("button");
        item_delete_el.classList.add("delete");
        item_delete_el.innerHTML = "Delete";

        item_actions_el.appendChild(item_edit_el);
        item_actions_el.appendChild(item_delete_el);
        item_el.appendChild(item_actions_el);
        list_el.appendChild(item_el);

        input.value = "";

        item_edit_el.addEventListener('click', () => {
            if (item_edit_el.innerText.toLowerCase() == "edit") {
                item_input_el.removeAttribute("readonly");
                item_input_el.focus();
                item_edit_el.innerText = "Save";
            } else {
                item_input_el.setAttribute("readonly", "readonly");
                item_edit_el.innerText = "Edit"
            }
        });

        item_delete_el.addEventListener('click', () => {
            list_el.removeChild(item_el);
        });
    });
});

function set_shadows(active_type, personal_btn, work_btn, school_btn, other_btn) {
    
}