document.querySelector('form').addEventListener('submit', (event) => {
    event.preventDefault();
    let a1 = document.querySelector('#i-1').value;
    console.log(a1);
    let a2 = document.querySelector('#i-2').value;
    console.log(a2);
    let a3 = document.querySelector('#i-3').value;
    console.log(a3);
    let a4 = document.querySelector('#i-4').value;
    console.log(a4);
    let a5 = document.querySelector('#i-5').value;
    console.log(a5);
});

// document.querySelector('button').onclick = myClick();

// function myClick() {
//     // let a = document.querySelector('.input').value;
//     alert('a');
// }