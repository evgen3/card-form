document.querySelector('form').addEventListener('submit', (event) => {
    event.preventDefault();

    const formData = new FormData(event.target);
    const formDataObject = {};
    formData.forEach((value, key) => (formDataObject[key] = value));

    const validCardNumber = validate('#card-number', '#error-card-number', validateCardNumber)
    const validCardHolder = validate('#card-holder', '#error-card-holder', validateCardHolder);
    const validMonth = validate('#month', '#error-month', validateMonth);
    const validYear = validate('#year', '#error-year', validateYear);
    const validCvv = validate('#cvv', '#error-cvv', validateCvv);

    if (validCardNumber &&
        validCardHolder &&
        validMonth &&
        validYear &&
        validCvv) {
        console.log(formDataObject);
    }

});

function validate(inputId, spanId, func) {

    const inputItem = document.querySelector(inputId);
    const spanItem = document.querySelector(spanId);

    const errorText = func(inputItem.value);
    spanItem.innerText = errorText;

    if (errorText !== '') {
        inputItem.style.borderColor = 'red';
        return false;
    } else {
        inputItem.style.borderColor = 'green';
        return true;
    }
}

function removeErrorOnClick(inputId, spanId) {
    document.querySelector(inputId).addEventListener('click', (event) => {
        document.querySelector(spanId).innerText = '';
    });
}

removeErrorOnClick('#card-number', '#error-card-number');
removeErrorOnClick('#card-holder', '#error-card-holder');
removeErrorOnClick('#month', '#error-month');
removeErrorOnClick('#year', '#error-year');
removeErrorOnClick('#cvv', '#error-cvv');

function validateCardNumber(value) {
    if (value.length !== 16) {
        return 'Ошибка, должно быть 16 цифр!';
    } else {
        return '';
    }
}

function validateCardHolder(value) {
    if (value.length < 1) {
        return 'Ошибка, поле не заполнено!';
    } else {
        return '';
    }
}

function validateMonth(value) {
    if (value < 1 || value > 12) {
        return 'Ошибка, месец должен быть от 1 до 12!';
    } else {
        return '';
    }
}

function validateYear(value) {
    if (value < 2023) {
        return 'Ошибка,  год должен быть от 2023!';
    } else {
        return '';
    }
}

function validateCvv(value) {
    if (value.length !== 3) {
        return 'Ошибка, в CVV должно быть 3 цифры!';
    } else {
        return '';
    }
}


