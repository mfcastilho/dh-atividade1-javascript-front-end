console.log("Start js");

const inputEmail = document.querySelector("[data-email-id]");
const inputFullName = document.querySelector("[data-full-name-id");
const inputUserName = document.querySelector("[data-user-name-id]");
const inputPassword = document.querySelector("[data-password-id]");
const inputVerifyPassword = document.querySelector("[data-verify-paswword-id]");

inputFullName.addEventListener("keypress", blockNumbers);


function blockNumbers(event){

  const numbers = [0,1,2,3,4,5,6,7,8,9];
  numbers.forEach(element => {
    if(event.key == element){
      Swal.fire({
        title: 'Erro!',
        text: 'Números não são aceitos',
        icon: 'error',
        confirmButtonText: 'OK'
      })
    }
  })
}