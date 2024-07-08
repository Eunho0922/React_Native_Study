const { reject } = require("async");

// 콜백 함수
function fetchData(callBack) {
    setTimeout(() => {
        callBack('Data received');
    }, 1000);
}

fetchData((data) => {
    console.log(data);
});

// 프로미스 
const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve('Data received');
    }, 1000);
});

promise.then(data => {
    console.log(data);
}).catch(error => {
    console.error(error);
});

const promise1 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve('First promise')
    }, 1000);
});

const promise2 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve('Second promise');
    }, 2000);
});

promise1.then(data => {
    console.log(data);
    return promise2
}).then(data => {
    console.log(data);
}).catch(error => {
    console.error(error);
});