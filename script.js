

document.getElementById('fetch-button').onclick = function() {
    
    let xhr = new XMLHttpRequest;

    xhr.onreadystatechange = function() {
        if(xhr.readyState === 4 && xhr.status === 200) {
            let posts = JSON.parse(xhr.responseText);

            let postListHTML = '';
            for(let post of posts) {
                postListHTML += `
                    <p>${post.title}</p>
                    <small>${post.body}</small>`
            }

            document.getElementById('post-list-container').innerHTML = postListHTML;
        }
    }

    xhr.open('GET', 'http://jsonplaceholder.typicode.com/posts');

    xhr.send();
}