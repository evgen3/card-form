document.querySelector('form').addEventListener('submit', (event) => {
    event.preventDefault();

    const formData = new FormData(event.target);
    const formDataObject = {};
    formData.forEach((value, key) => (formDataObject[key] = value));

    const cardNumber = document.querySelector('#card-number');
    const errorCardNumber = document.querySelector('#error-card-number');

    const cardNumberError = validateCardNumber(cardNumber.value);
    errorCardNumber.innerText = cardNumberError;

    const borderColorCardNumber = inputBorderColorCardNumber(cardNumber.value);
    cardNumber.style.borderColor = borderColorCardNumber;


    const cardHolder = document.querySelector('#card-holder');
    const errorCardHolder = document.querySelector('#error-card-holder');

    const cardHolderError = validateCardHolder(cardHolder.value);
    errorCardHolder.innerText = cardHolderError;

    const borderColorCardHolder = inputBorderColorCardHolder(cardHolder.value);
    cardHolder.style.borderColor = borderColorCardHolder;

   

    const month = document.querySelector('#month');
    const errorMonth = document.querySelector('#error-month');

    const monthError = validateMonth(month.value);
    errorMonth.innerText = monthError;

    const borderColorMonth = inputBorderColorMonth(month.value);
    month.style.borderColor = borderColorMonth;

    

    const year = document.querySelector('#year');
    const errorYear = document.querySelector('#error-year');

    const yearError = validateYear(year.value);
    errorYear.innerText = yearError;

    const borderColorYear = inputBorderColorYear(year.value);
    year.style.borderColor = borderColorYear;

    

    const cvv = document.querySelector('#cvv');
    const errorCvv = document.querySelector('#error-cvv');

    const cvvError = validateCvv(cvv.value);
    errorCvv.innerText = cvvError;

    const borderColorCvv = inputBorderColorCvv(cvv.value);
    cvv.style.borderColor = borderColorCvv;

   

    if (cardNumberError === '' &&
        cardHolderError === '' &&
        monthError === '' &&
        yearError === '' &&
        cvvError === '') {
        console.log(formDataObject);
    }

});

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

function inputBorderColorCardNumber(value) {
    if (value.length !== 16) {
        return 'red';
    } else {
        return 'green';
    }
}

function validateCardHolder(value) {
    if (value.length < 1) {
        return 'Ошибка, поле не заполнено!';
    } else {
        return '';
    }
}

function inputBorderColorCardHolder(value) {
    if (value.length < 1) {
        return 'red';
    } else {
        return 'green';
    }
}

function validateMonth(value) {
    if (value < 1 || value > 12) {
        return 'Ошибка, месец должен быть от 1 до 12!';
    } else {
        return '';
    }
}

function inputBorderColorMonth(value) {
    if (value < 1 || value > 12) {
        return 'red';
    } else {
        return 'green';
    }
}

function validateYear(value) {
    if (value < 2023) {
        return 'Ошибка,  год должен быть от 2023!';
    } else {
        return '';
    }
}

function inputBorderColorYear(value) {
    if (value < 2023) {
        return 'red';
    } else {
        return 'green';
    }
}

function validateCvv(value) {
    if (value.length !== 3) {
        return 'Ошибка, в CVV должно быть 3 цифры!';
    } else {
        return '';
    }
}

function inputBorderColorCvv(value) {
    if (value.length !== 3) {
        return 'red';
    } else {
        return 'green';
    }
}


