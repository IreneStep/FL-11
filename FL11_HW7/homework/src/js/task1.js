let email = prompt('Please, enter your email', '');

let changePassUser;
let changePassAdmin;
let oldPassUser;
let oldPassAdmin;
let newPassUser;
let newPassAdmin;
let againNewPassUser;
let againNewPassAdmin;
const six = 6;
const five = 5;
let userPass;
let adminPass;

if (email === '' || email === null) {
  alert('Canceled');
} else if (email.length < six) {
  alert('I do not know any emails having name length less then 6 symbols');
} else if (email === 'user@gmail.com' || email === 'admin@gmail.com') {
  if (email === 'user@gmail.com') {
    userPass = prompt('Please, enter your password for user@gmail.com ', '');
    if (userPass === '' || userPass === null) {
      alert('Canceled');
    } else if (userPass === 'UserPass') {
      alert('Password is correct');
      changePassUser = confirm('Do you want to change your password?');
      if (changePassUser === false) {
        alert('You have failed the change');
      } else if (changePassUser === true) {
        oldPassUser = prompt('Write the old password');
        if (oldPassUser === '' || oldPassUser === null) {
          alert('Canceled');
        } else if (oldPassUser === 'UserPass') {
          alert('Password is correct');
          newPassUser = prompt('Enter new password', '');
          if (newPassUser.length < five) {
            alert('It is too short password. Sorry.');
          } else if (newPassUser === '' || newPassUser === null) {
            alert('Canceled');
          } else {
            againNewPassUser = prompt('Enter again a new pass', '');
            if (newPassUser !== againNewPassUser) {
              alert('You wrote the wrong password.');
            } else {
              alert('You have successfully changed your password');
            }
          }
        }
      }
    } else {
      alert('Wrong password');
    }
  } else if (email === 'admin@gmail.com') {
    adminPass = prompt('Please, enter your password for admin@gmail.com', '');
  }
  if (adminPass === '' || adminPass === null) {
    alert('Canceled');
  } else if (adminPass === 'AdminPass') {
    alert('Password is correct');
    changePassAdmin = confirm('Do you want to change your password?');
    if (changePassAdmin === false) {
      alert('You have failed the change');
    } else if (changePassAdmin === true) {
      oldPassAdmin = prompt('Write the old password');
      if (oldPassAdmin === '' || oldPassAdmin === null) {
        alert('Canceled');
      } else if (oldPassAdmin === 'AdminPass') {
        alert('Password is correct');
        newPassAdmin = prompt('Enter new password', '');
        if (newPassAdmin.length < five) {
          alert('It is too short password. Sorry.');
        } else if (newPassAdmin === '' || newPassAdmin === null) {
          alert('Canceled');
        } else {
          againNewPassAdmin = prompt('Enter again a new pass', '');
          if (newPassAdmin !== againNewPassAdmin) {
            alert('You wrote the wrong password.');
          } else {
            alert('You have successfully changed your password');
          }
        }
      }
    }
  } else {
    alert('Wrong password');
  }
} else {
  alert('i do not know you');
}

