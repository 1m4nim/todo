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





// script.js

// TODO追加機能
document.getElementById('todo_btn').addEventListener('click', function () {
    const inputTodo = document.getElementById('input_todo');
    const todoUl = document.getElementById('todo_ul');

    if (inputTodo.value.trim() !== "") {
        const newLi = document.createElement('li');
        newLi.textContent = inputTodo.value;

        // 完了ボタンを追加
        const doneButton = document.createElement('button');
        doneButton.textContent = '完了！';
        doneButton.addEventListener('click', function () {
            moveToDone(newLi);
        });
        newLi.appendChild(doneButton);

        todoUl.appendChild(newLi);
        inputTodo.value = "";
    }
});

function clearText() {
    document.getElementById('input_todo').value = "";
}

// TODO項目をやったことリストに移動する関数
function moveToDone(item) {
    const doneUl = document.getElementById('done_ul');
    const doneItem = document.createElement('li');
    doneItem.textContent = item.childNodes[0].textContent; // 完了ボタンのテキストを削除

    // 日付と時間を追加
    const date = new Date();
    const formattedDate = `${date.getFullYear()}/${date.getMonth() + 1}/${date.getDate()} ${date.getHours()}:${String(date.getMinutes()).padStart(2, '0')}`;
    const dateSpan = document.createElement('span');
    dateSpan.textContent = ` - ${formattedDate}`;
    doneItem.appendChild(dateSpan);

    // 削除ボタンを追加
    const deleteButton = document.createElement('button');
    deleteButton.textContent = '削除';
    deleteButton.addEventListener('click', function () {
        doneItem.remove();
    });
    doneItem.appendChild(deleteButton);

    doneUl.appendChild(doneItem);
    item.remove(); // TODOリストからアイテムを削除
}
