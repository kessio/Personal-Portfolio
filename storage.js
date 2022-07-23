const form = document.getElementById('contact-form');
const userName = document.getElementById('name');
const userEmail = document.getElementById('email');
const userMessage = document.getElementById('comment');

const formData = { fullName: '', email: '', userMessage: '' };
Array.from(form.elements).forEach((input) => {
  input.addEventListener('input', () => {
    formData.fullName = userName.value;
    formData.email = userEmail.value;
    formData.userMessage = userMessage.value;
    localStorage.setItem('formData', JSON.stringify(formData));
  });
});
let getFormData = localStorage.getItem('formData');
if (getFormData) {
  getFormData = JSON.parse(getFormData);
  userName.value = getFormData.fullName;
  userEmail.value = getFormData.email;
  userMessage.value = getFormData.userMessage;
} else {
  userName.value = '';
  userEmail.value = '';
  userMessage.value = '';
}
