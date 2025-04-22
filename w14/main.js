const url = 'https://jsonplaceholder.typicode.com/todos/1';
const urlComment = 'https://jsonplaceholder.typicode.com/comments/1';
const urlPhotoArr = 'https://jsonplaceholder.typicode.com/photos';
const output = document.getElementById("output");
// const url = 'https://invalid.url.typicode.com/bad-endpoint'; // Catch error
// const url = 'https://jsonplaceholder.typicode.com/todos/1ggggg'; // server error

async function getTodo() {
    try {
        const response = await fetch(url);
        const data = await response.json();
        //console.log(data);
        //console.log(response);
        if (response.status === 200) {
            console.log("Success: " + JSON.stringify(data));
            output.textContent = `To do: ${JSON.stringify(data)}`;
        }
        else {
            console.log('Endpoint Error: ' + response.statusText);
        }
    } catch(error) {
        console.log('Error ' + error);
    }
}

const getComment = async() => {
    try {
        const comment = await fetch(urlComment);
        const commentJson = await comment.json();
        if (comment.status === 200) {
            console.log("Success: " + JSON.stringify(commentJson));
            output.textContent += `Comment: ${JSON.stringify(commentJson)}`;
        }
        else {
            console.log('Endpoint Error: ' + comment.statusText);
        }
    }
    catch (error) {
        console.log(" Server Error " + error);
    }
}

const getPhotos = async() => {
    try {
        let photos = [];
        photos = await fetch(urlPhotoArr);
        let p = await photos.json();
        //console.log(JSON.stringify(p));
        if (photos.status === 200) {
            p.slice(0,5).forEach((photo) => {
                const img = document.createElement("img");
                console.log(photo.thumbnailUrl);
                img.setAttribute("src", photo.url);
                output.appendChild(img);
            });
        }
        else {
            console.log('Endpoint Error: ' + photos.statusText);
        }
    }
    catch (error) {
        console.log(" Server Error " + error);
    }
}



const renderData = (data) => {
    
}

getTodo();
//getComment();
getPhotos();


