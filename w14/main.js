// function getData() {
//     return new Promise(resolve => {
//         setTimeout(() => {
//             resolve(46);
//         }, 1);
//     })
// }

// async function start() {
//     const data = await fetch('https://api.weather.gov/gridpoints/OKX/35,35/forecast');
//     const result = await data.json();
//     console.log(result.properties.periods[1].shortForecast);
// }

// async function start2() {
//     fetch('https://api.weather.gov/gridpoints/OKX/35,35/forecast')
//     .then(data => data.json())
//     .then(result => {
//         console.log(result.properties.periods[1].shortForecast);
//     })
// }

// async function start2() {
//     getData().then(result => {
//         console.log(result);
//     })
// }


//start2();

// function getData() {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             reject('something wrong!');
//         }, 1);
//     })
// }

// async function start() {
//     try {
//     // success
//     const result = await getData();
//     }
//     catch (error) {
//     //failure
//     console.log(error);
//     }
// }

// async function start2() {
//     const result = await getData()
//     .catch(error => {
//         console.log(error); 
//     }) 
//     console.log(error);
// }

//start();


async function start() {
    try {
        const data = await fetch('https://api.weather.gov/gridpoints/HNX/52,100/forecast');
        const result = await data.json();
        onSucc(result.properties.periods[1].temperature);
    } catch(e) {
        onFailure();
    }
}

const onSucc = (result) => {
    console.log(result);
}

const onFailure = (e) => {
    console.log(e);
}

start();