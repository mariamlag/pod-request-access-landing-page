
const input = document.getElementById("email");
const error = document.getElementById("error");

const button = document.getElementById("button");

button.addEventListener("click", () => {
  event.preventDefault();
  validateEmail(input, error);
});


function validateEmail(inputText, errorr){
  
    var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if(inputText.value.match(mailformat)){
      error.style.display = "none";
      input.style.borderColor = "black";
      return true;
    }
    else{
      input.style.borderColor = "red";
      error.style.display = "flex";
      return false;
    }
}