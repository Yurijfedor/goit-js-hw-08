import throttle from 'lodash.throttle';

const STORAGE_KEY = 'feedback-form-state';

const refs = {
  form: document.querySelector('.feedback-form'),
  input: document.querySelector('.feedback-form input'),
  textarea: document.querySelector('.feedback-form textarea'),
};

populateFormData();

refs.form.addEventListener('submit', onFormSubmit);
refs.form.addEventListener('input', onFormInput);
refs.input.addEventListener('input', throttle(onChangeInput, 500));
refs.textarea.addEventListener('input', throttle(onChangeTextarea, 500));

console.log(refs.input.value, refs.textarea.value);
function onFormSubmit(evt) {
  if (!refs.input.value || !refs.textarea.value) {
    return alert('sorry, all fields must be filled');
  }
  evt.preventDefault();

  const inputValue = refs.input.value;
  const textareaValue = refs.textarea.value;
  const formData = {
    inputValue,
    textareaValue,
  };

  evt.target.reset();
  localStorage.removeItem(STORAGE_KEY);
  console.log(formData);
}

function onFormInput() {
  const localStorageObj = {
    email,
    message,
  };
  localStorage.setItem(STORAGE_KEY, JSON.stringify(localStorageObj));
}
let email = refs.input.value;
function onChangeInput(evt) {
  email = evt.target.value;
}

let message = refs.textarea.value;
function onChangeTextarea(evt) {
  message = evt.target.value;
}

function populateFormData() {
  const savedFormData = JSON.parse(localStorage.getItem(STORAGE_KEY));
  if (savedFormData) {
    refs.input.value = savedFormData.email;
    refs.textarea.value = savedFormData.message;
  }
}
