const signUpForm = document.querySelector('#signUpForm');
signUpForm.addEventListener('submit', (e) => {
  e.preventDefault();
  // get user info
  const email = signUpForm['signUpEmail'].value;
  const password = signUpForm['signUpPassword'].value;
  
  // sign up the user
  auth.createUserWithEmailAndPassword(email, password).then(cred => {
    console.log(cred.user);
    signUpForm.reset;
    window.location.href = 'https://ppheartrate-5im9qopxv-anqis-projects-d8885076.vercel.app/';
    }
  )
})
