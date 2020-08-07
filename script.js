

document.getElementById('fetch-button').onclick = function () {
    let url = 'http://jsonplaceholder.typicode.com/posts';
    sendRequest(url, 'GET', null, function (posts) {
        let postListHTML = '';
        for (let post of posts) {
            postListHTML += `
                    <p>${post.title}</p>
                    <small>${post.body}</small>`
        }
        document.getElementById('post-list-container').innerHTML = postListHTML;
    });
}



function sendRequest(url, method, body, callback) {
    let xhr = new XMLHttpRequest;

    xhr.onreadystatechange = function () {
        if (xhr.readyState === 4 && xhr.status === 200) {
            callback(JSON.parse(xhr.responseText));
        }
    };
    
    xhr.open(method, url);
    xhr.send(body);
}


