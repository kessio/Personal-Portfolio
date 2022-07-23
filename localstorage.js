const form = document.getElementById('contact-form')
const  userName = document.getElementById('name');
const  userEmail = document.getElementById('email');
const userMessage = document.getElementById('comment');

 const formData = {fullName: '' , email: '', userMessage: ''}


Array.from(form.elements).forEach(input => {
  input.addEventListener('input', () => {
    /* Fill our object with values   */
    formData.fullName = userName.value;
    formData.email = userEmail.value;
    formData.userMessage = userMessage.value;
    /* set form data */
    localStorage.setItem('formData', JSON.stringify(formData));
   
   
  })

})
/* get form data and set to our input fiedl value */
let getFormData = localStorage.getItem('formData');
if (getFormData) {
  getFormData = JSON.parse(getFormData);
  userName.value = getFormData.fullName;
  userEmail.value = getFormData.email;
  userMessage.value = getFormData.userMessage;
}else {
  userName.value = '';
  userEmail.value = '';
  userMessage.value = '';
}




