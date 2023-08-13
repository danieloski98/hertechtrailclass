let btn = document.querySelector('#btn');
let btn2 = document.querySelector('#btn2');
let p = document.querySelector("#paragraph");

let span = document.querySelectorAll('div > div').forEach(element => {
    element.innerHTML = localStorage.getItem('Foundation');
});


btn.addEventListener('click', () => {
    localStorage.setItem('Foundation', 'Hertechtrailers are awesome!!');
});

btn2.addEventListener('click', () => {
    let val = localStorage.getItem('Foundation');
    if (val === null) {
        alert('Not found');
    } else {
        p.innerHTML = val;
    }
});