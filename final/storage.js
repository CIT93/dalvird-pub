
const saveLS = (userData) => {
    const userDataArr = JSON.stringify(userData); 
    localStorage.setItem("user", userDataArr);
}

const getLS = () => {
    const userHouseData = localStorage.getItem("user");
    if (userHouseData === null) {
        return [];
    }
    else {
        return JSON.parse(userHouseData);
    }
}

const userHouseData = getLS();

export {userHouseData, saveLS, getLS};