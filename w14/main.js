// const url = 'http://worldtimeapi.org/api/timezone/America/New_York';

// async function getData() {
//     const response = await fetch(url);
//     data = await response.json();
//     console.log(data);
// }

// getData();

const url = 'https://api.spotify.com/v1/artists/2P1puQXmG48EVLBrHbum11';
const request = new Request (url, {
    headers: {
        'Authorization': 'Bearer 123'
    }
})
//     // const response = await fetch(request);
//     // const data = await response.json();
//     // console.log(data);
//     fetch().then(response => response.json())
//     .then(data => console.log(data))
//     .catch(error => console.log(`Error ${error}`))
// }

async function getData() {
    try {
        const response = await fetch(request);
        const data = await response.json();
        if (response.status === 200) {
            console.log('Success', data);
        }
        else {
            console.log('Server Error', data.error.message);
        }
    } catch (error) {
        console.log('Error', error);
    }
}

getData();