'use strict'

const removeSubmitButtonDefaultAttribute = (event) => {
  event.preventDefault();
}

const resetForm = (event) => {
  event.preventDefault();

  const mainFormElement = document.getElementById('main-form');

  mainFormElement.reset();
}

document.getElementById('submitBtn').addEventListener('click', removeSubmitButtonDefaultAttribute);
document.getElementById('clearBtn').addEventListener('click', resetForm);
