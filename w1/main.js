console.log("Hello from inside main.js file");

//let myVar;

const myVar = "helourrso";
const myVarType = typeof(myVar);
console.log("myVarType" + myVarType); //old way
console.log(`myVarType ${myVarType}`); // new way

function runNow () {
    if (myVarType === "number") {
        console.log(`will line 11 run?`);
    }
    else {
        console.log(`will line 13 run?`);
    }
}

runNow();
runNow();