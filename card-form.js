document.querySelector('form').addEventListener('submit', (event) => {
    event.preventDefault();

    let formData = new FormData(event.target);
    const formDataObject = {};
    formData.forEach((value, key) => (formDataObject[key] = value));
    console.log(formDataObject);
});


