## Async / Await
- used to make our code more readable, on the promise handler side

#### async and await have to be used together
- await can be used without async in JS modules
- chrome devTools allows await without async

#### async/await only effects the Promise receiver
- Don't change Promise creator size, only how you handle the Promise

#### You can await any function that returns a Promise

#### Any function can be converted to async 
const me = {
    sayHello() {
        return `I am Wade`
    }
}
me.sayHello() // 'I am Wade'

- converted to async:

const me = {
    async sayHello() {
        return `I am Wade`
    }
}
me.sayHello() // Promise { 'I am Wade' }

#### All async functions return a Promise

#### Error handling with try/catch
- instead of using .catch()
- .catch with resolve code below it will run the catch code and the code after it



#### .then() function example:
async function start2() {
    getData().then(result => {
        console.log(result);
    })
}

- Allows programmer to use the result from async operation as a regular variable 
instead of an internal block-scoped variable. 

fetch(): a native browser feature, used to call back-end points and receive data. 
- returns a Promise