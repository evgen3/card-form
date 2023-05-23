document.querySelector('form').addEventListener('submit', (event) => {
    event.preventDefault();
    const form = document.querySelector('form');
    console.dir(form.elements.date.value); 
});

