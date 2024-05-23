
console.log('bom dia, amigos');

const email = window.document.getElementById('email');

email.addEventListener('focusout', () => {
  const error = window.document.getElementById('error-msg');
  error.innerHTML = '';

  email.style.backgroundColor = 'white';
  email.style.border = '1px solid black';
})

email.addEventListener('keydown', () => {
  const regex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
  const error = window.document.getElementById('error-msg');

  if(email.value.match(regex)) {
    error.innerHTML = '';
    email.style.backgroundColor = 'white';
    email.style.border = '1px solid black';
  }
  else {
    console.log('estou aqui')
    error.innerHTML = 'Valid email required';
    email.style.backgroundColor = ('hsla(4, 100%, 67%, 0.4)');
    email.style.border = ('1px solid hsl(4, 100%, 67%)');
  }
})


window.document.getElementById('sub-button').addEventListener('click', () => {

  const regex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
  if(email.value.match(regex)){

    const container = window.document.getElementById('container');
    const success_container = window.document.getElementById('success-container');
    const user_email = window.document.getElementById('user-email');
  
    container.style.display = 'none';
    success_container.style.display = 'block';
    user_email.innerHTML = email.value;
  }

  else {
    const error = window.document.getElementById('error-msg');
    error.innerHTML = 'Valid email required';
    email.style.backgroundColor = ('hsla(4, 100%, 67%, 0.4)');
    email.style.border = ('1px solid hsl(4, 100%, 67%)');
  }

})

window.document.getElementById('success-dismiss-button').addEventListener('click', () => {
  const container = window.document.getElementById('container');
  const success_container = window.document.getElementById('success-container');

  container.style.display = 'flex';
  success_container.style.display = 'none';
})