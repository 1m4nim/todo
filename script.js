document.getElementById('myForm').addEventListener('submit', function (event) {

    // 入力された値を取得
    const confirmValue = document.getElementById('confirmInput').value;

    // 取得した値を表示
    document.getElementById('confirmOutput').innerText = confirmValue;
});


