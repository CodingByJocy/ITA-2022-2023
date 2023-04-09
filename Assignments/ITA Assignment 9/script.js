
let inputs = document.querySelectorAll('input');

const userStatus = document.getElementById('username-status');
const pwStatus = document.getElementById('password-status');
const correctUser = 'new_user';
const correctPw = '123456789'

let errors = {
    'username' : [],
    'password' : []
};

inputs.forEach(element => {
    element.addEventListener('change', e => {
        let currentInput = e.target
        let inputValue = currentInput.value
        let inputName = currentInput.getAttribute('name')

        if(inputValue.length > 0) {
            errors[inputName] = [];

            let validation = inputValue.trim();
            
            switch(inputName) {
                case 'username':
                    if (validation === correctUser) {
                      userStatus.textContent = '✓';
                      userStatus.classList.remove('error');
                      userStatus.classList.add('success');
                
                      currentInput.classList.add('valid-input');
                      currentInput.classList.remove('invalid-input');
                    } else {
                      userStatus.textContent = '✗';
                      userStatus.classList.remove('success');
                      userStatus.classList.add('error');

                      errors[inputName].push('Username is incorrect.')

                      currentInput.classList.add('invalid-input');
                      currentInput.classList.remove('valid-input');
                    }
                    break;

                    case 'password':
                        if (validation === correctPw) {
                          pwStatus.textContent = '✓';
                          pwStatus.classList.remove('error');
                          pwStatus.classList.add('success');

                          currentInput.classList.add('valid-input');
                          currentInput.classList.remove('invalid-input');
                        } else {
                          pwStatus.textContent = '✗';
                          pwStatus.classList.remove('success');
                          pwStatus.classList.add('error');

                          errors[inputName].push('Password is incorrect!')
                          
                          currentInput.classList.add('invalid-input');
                          currentInput.classList.remove('valid-input');
                        }
                        break;
            }

        } else {
            errors[inputName] = ['Cannot be blank!'];
        } 
        populateErrors()
      
    }) 
   
  });

const populateErrors = () => {

    for(let elem of document.querySelectorAll('ul')){
        elem.remove()
    }

    for(let key of Object.keys(errors)) {
        let input = document.querySelector(`input[name="${key}"]`)
        let parentElement = input.parentElement
        let errorsElement = document.createElement('ul')
        parentElement.appendChild(errorsElement)

        errors[key].forEach(error => {
            let li = document.createElement('li')
            li.innerText = error
            errorsElement.appendChild(li)
        });

    }

};
