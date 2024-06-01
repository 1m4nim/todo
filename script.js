const btn = document.getElementById('todo_btn');
const ul = document.getElementById('todo_ul');

btn.addEventListener('click', function () {
    let text = document.getElementById('input_todo').value;
    ul.insertAdjacentHTML('beforeend', '<li>' + text + '</li>');
}, false);

function clearText() {
    var textForm = document.getElementById("input_todo");
    textForm.value = "";
}
