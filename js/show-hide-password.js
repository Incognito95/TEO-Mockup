const wrapper = document.querySelector('.input-wrapper');
const [input, showPswBtn] = wrapper.children;
showPswBtn.addEventListener('click', () => togglePasswordView());

function togglePasswordView() {
  if (input.type === 'password') {
    input.type = 'text';
  } else {
    input.type = 'password';
  }
  
  input.focus();
}