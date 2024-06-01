const btn = document.getElementById('todo_btn');
const ul = document.getElementById('todo_ul');

//list-delete
function addDeleteButton(li) {
    const deleteButton = document.createElement("button");
    deleteButton.textContent = "完了！";
    deleteButton.classList.add("delete-btn");
    deleteButton.addEventListener("click", function () {
        li.remove();
    });
    li.appendChild(deleteButton);
}




btn.addEventListener('click', function () {
    let text = document.getElementById('input_todo').value;


    if (text.trim() !== '') {
        const li = document.createElement("li");
        li.textContent = text;
        addDeleteButton(li);
        ul.appendChild(li);
        clearText();
        //ul.insertAdjacentHTML('beforeend', '<li>' + text + '</li>');
        //clearText(); // テキストボックスをクリアする
    } else {
        alert('テキストボックスが空です。');
    }
}, false);

function clearText() {
    var textForm = document.getElementById("input_todo");
    textForm.value = "";
}

