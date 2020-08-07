

document.getElementById('login').onclick = function () {
    let url = 'https://reqres.in/api/login';
    let body = JSON.stringify({
        email: 'eve.holt@reqres.in',
        password: 'cityslicka'
    })
    sendRequest(url, 'POST', body, function(token) {
        // a token scope-ra figyelni kell
        console.log(token);
        // az egymástól függő requestek beágyazottsága
        // erre megoldás a promise
        sendRequest('https://reqres.in/api/users', 'GET', null, function(users) {
            console.log(users);
        })
    })
    
}



function sendRequest(url, method, body, callback) {
    let xhr = new XMLHttpRequest;

    xhr.onreadystatechange = function () {
        if (xhr.readyState === 4 && xhr.status === 200) {
            callback(JSON.parse(xhr.responseText));
        }
    };
    xhr.open(method, url);
    xhr.setRequestHeader('content-type', 'application/json');
    xhr.send(body);
}


