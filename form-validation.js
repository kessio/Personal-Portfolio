const contactForm = document.getElementById('contact-form');
const email = document.getElementById('email');
const validationMessage = document.getElementById('error');

contactForm.addEventListener('submit', (event) => {
   // alert("hello lowercase")
  event.preventDefault();
if (email.value !== email.value.toLowerCase()) {
    validationMessage.style.display = 'flex'; 
  } else {
    contactForm.submit();
  }
});