document.getElementById('myForm').addEventListener('submit', function(event) {
    event.preventDefault(); // フォームのデフォルトの送信動作をキャンセル
            
    // 入力された値を取得
    const confirmValue = document.getElementById('confirmInput').value;

    // 取得した値を表示
    document.getElementById('confirmOutput').innerText = confirmValue;
});
