// let btn = document.querySelector('#btn');
// let btn2 = document.querySelector('#btn2');
let p = document.querySelector("#paragraph");

// btn.addEventListener('click', () => {
//     localStorage.setItem('Foundation', 'Hertechtrailers are awesome!!');
// });

// btn2.addEventListener('click', () => {
//     let val = localStorage.getItem('Foundation');
//     if (val === null) {
//         alert('Not found');
//     } else {
//         p.innerHTML = val;
//     }
// });

// functions
function Add() {
    sessionStorage.setItem('Academy', 'Hertechtrailers are awesome!!');
}

function Get() {
    let val = sessionStorage.getItem('Academy');
    if (val === null) {
        alert('Not found');
    } else {
        p.innerHTML = val;
    }
}