window.addEventListener('load', () => {
    allthoughts = JSON.parse(localStorage.getItem('allthoughts')) || [];
    const nameInput = document.querySelector('#name-input');
    const newthoughtform = document.querySelector('#new-thought-form');

    const username = localStorage.getItem('username') || '';
    nameInput.value = username;
    nameInput.addEventListener('change', e => {
        localStorage.setItem('username', e.target.value);
    });

    newthoughtform.addEventListener('submit', e => {
        e.preventDefault();

        const thought = {
            content: e.target.elements.content.value,
            createdAt: new Date().getTime()
        }

        allthoughts.push(thought);

        localStorage.setItem('allthoughts', JSON.stringify(allthoughts));
        
        e.target.reset();

        DisplayThoughts();
    });

    DisplayThoughts();
});


function DisplayThoughts() {
    const thoughtlist = document.querySelector('#thought-list');
    thoughtlist.innerHTML = '';

    allthoughts.forEach(thought => {
        const thought = document.createElement('div');
        thought.classList.add('thought-item');

        const content = document.createElement('div');
        const actions = document.createElement('div');
        const editbtn = document.createElement('button');
        const deletebtn = document.createElement('button');

        content.classList.add('thought-content');
        actions.classList.add('actions');
        editbtn.classList.add('edit');
        deletebtn.classList.add('delete');

        content.innerHTML = `<input type="text" class="text" value="${thought.content}" readonly />`;
        editbtn.innerHTML = "edit";
        deletebtn.innerHTML = "delete";

        actions.appendChild(editbtn);
        actions.appendChild(deletebtn);
        thought.appendChild(content);
        thought.appendChild(actions);

        editbtn.addEventListener('click', e => {
            const input = content.querySelector('input');
            input.removeAttribute('readonly');
            input.focus();
            input.addEventListener('blur', e => {
                input.setAttribute('readonly', true);
                thought.content = e.target.value;
                localStorage.setItem('allthoughts', JSON.stringify('allthoughts'));
                DisplayThoughts();
            });
        });

        deletebtn.addEventListener('click', e => {
            allthoughts = allthoughts.filter(t => t != thought);
            localStorage.setItem('allthoughts', JSON.stringify('allthoughts'));
            DisplayThoughts();
        });
        
    });
}