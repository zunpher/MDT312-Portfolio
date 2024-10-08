window.onload = function () {
    document.getElementById("top").innerHTML = "Welcome to the Forum"
}

let postCount = 0;

function postFunction() {
    let text = document.getElementById('message').value;

    postCount++;

    if (postCount == 1) {
        document.getElementById('topic').innerText = text;
    } else if (postCount == 2) {
        document.getElementById('reply1').innerText = text;
    } else if (postCount == 3) {
        document.getElementById('reply2').innerText = text;
    }

    document.getElementById('message').value = '';
}

function clearFunction() {
    document.getElementById('topic').innerText = '';
    document.getElementById('reply1').innerText = '';
    document.getElementById('reply2').innerText = '';
    postCount = 0;
}