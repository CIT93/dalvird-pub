const url = 'https://jsonplaceholder.typicode.com/todos/1';
// const url = 'https://invalid.url.typicode.com/bad-endpoint'; // Catch error
// const url = 'https://jsonplaceholder.typicode.com/todos/1ggggg'; // server error

async function getData() {
    try {
        const response = await fetch(url);
        const data = await response.json();
        //console.log(data);
        //console.log(response);
        if (response.status === 200) {
            console.log("Success: " + JSON.stringify(data));
            renderData(data);
        }
        else {
            console.log('Server Error: ' + response.statusText);
        }
    } catch(error) {
        console.log('Error ' + error);
    }
}

const renderData = (data) => {
    // const output = document.body;
    // output.textContent = JSON.stringify(data);
    document.body.textContent = JSON.stringify(data);
}

getData();


