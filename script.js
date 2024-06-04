// script.js

document.addEventListener('DOMContentLoaded', (event) => {
    loadLists();
});

// TODO追加機能
document.getElementById('todo_btn').addEventListener('click', addTodo);

// エンターキーでTODO追加
document.getElementById('input_todo').addEventListener('keyup', function (event) {
    if (event.key === 'Enter') {
        addTodo();
    }
});

function addTodo() {
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
        saveLists();
    }
}

function clearText() {
    document.getElementById('input_todo').value = "";
}

// TODO項目をやったことリストに移動する関数
function moveToDone(item) {
    const doneUl = document.getElementById('done_ul');
    const doneItem = document.createElement('li');

    // 完了日時を取得
    const now = new Date();
    const dateString = now.toLocaleDateString('ja-JP');
    const timeString = now.toLocaleTimeString('ja-JP', { hour: '2-digit', minute: '2-digit' });

    // アイテムテキストと日時を設定
    doneItem.textContent = `${item.childNodes[0].textContent} - 完了日時: ${dateString} ${timeString}`;

    // 削除ボタンを追加
    const deleteButton = document.createElement('button');
    deleteButton.textContent = '削除';
    deleteButton.addEventListener('click', function () {
        doneItem.remove();
        saveLists();
    });
    doneItem.appendChild(deleteButton);

    doneUl.appendChild(doneItem);
    item.remove(); // TODOリストからアイテムを削除
    saveLists();
}

// リストをローカルストレージに保存する関数
function saveLists() {
    const todoUl = document.getElementById('todo_ul');
    const doneUl = document.getElementById('done_ul');

    const todoItems = [];
    const doneItems = [];

    todoUl.querySelectorAll('li').forEach(item => {
        todoItems.push(item.childNodes[0].textContent);
    });

    doneUl.querySelectorAll('li').forEach(item => {
        doneItems.push(item.childNodes[0].textContent);
    });

    localStorage.setItem('todoList', JSON.stringify(todoItems));
    localStorage.setItem('doneList', JSON.stringify(doneItems));
}

// ローカルストレージからリストを読み込む関数
function loadLists() {
    const todoUl = document.getElementById('todo_ul');
    const doneUl = document.getElementById('done_ul');

    const todoItems = JSON.parse(localStorage.getItem('todoList')) || [];
    const doneItems = JSON.parse(localStorage.getItem('doneList')) || [];

    // 初回ロード時にのみ例のリストアイテムを追加
    if (todoItems.length === 0 && doneItems.length === 0) {
        const exampleItem = document.createElement('li');
        exampleItem.textContent = '(例)りんご買う';
        todoUl.appendChild(exampleItem);
    } else {
        todoItems.forEach(text => {
            const newLi = document.createElement('li');
            newLi.textContent = text;

            // 例のアイテム以外に完了ボタンを追加
            if (text !== '(例)りんご買う') {
                const doneButton = document.createElement('button');
                doneButton.textContent = '完了！';
                doneButton.addEventListener('click', function () {
                    moveToDone(newLi);
                });
                newLi.appendChild(doneButton);
            }

            todoUl.appendChild(newLi);
        });

        doneItems.forEach(text => {
            const newLi = document.createElement('li');
            newLi.textContent = text;

            // 削除ボタンを追加
            const deleteButton = document.createElement('button');
            deleteButton.textContent = '削除';
            deleteButton.addEventListener('click', function () {
                newLi.remove();
                saveLists();
            });
            newLi.appendChild(deleteButton);

            doneUl.appendChild(newLi);
        });
    }
}
