const STORAGE_KEY = 'feedback-form-state';

const refs = {
  form: document.querySelector('.feedback-form'),
  input: document.querySelector('.feedback-form input'),
  textarea: document.querySelector('.feedback-form textarea'),
};

populateFormData();

refs.form.addEventListener('submit', onFormSubmit);
refs.form.addEventListener('input', onFormInput);
refs.input.addEventListener('input', onChangeInput);
refs.textarea.addEventListener('input', onChangeTextarea);

function onFormSubmit(evt) {
  evt.preventDefault();
  const dataForm = {
    email: refs.input.value,
    message: refs.textarea.value,
  };
  console.log(dataForm);
  evt.currentTarget.reset();
  localStorage.removeItem(STORAGE_KEY);
}
function onFormInput() {
  const localStorageObj = {
    email,
    message,
  };
  localStorage.setItem(STORAGE_KEY, JSON.stringify(localStorageObj));
}
let email = '';
function onChangeInput(evt) {
  email = evt.target.value;
}
let message = '';
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
