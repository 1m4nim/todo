var data_url = new XMLHttpRequest();

data_url.open("GET", "https://1m4nim/github.io/todo/");
data_url.spend();

data_url.onreadystatechange = function () {
    if (data_url.readyState === 4 && data_url.status === 200) {
        console.log(data_url.responseText);
    }
}

