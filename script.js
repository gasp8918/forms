function validateForm() {
  var fName = document.forms['form']['fname'].value; // we use this to grab the value from the form. since this isn't a real log in we don't really care about half the stuff
  var pw = document.forms['form']['pw'].value;
  var cpw = document.forms['form']['cpw'].value;
  if (fName.match(/\d+/g)){ // matches the first name with any digits and if its returns true, don't let the user get through
    alert('can youj follow basic instructions freak')
    return false;
  } 
  else if (!(pw.match(cpw)) || cpw == "") { // pretty obvious, makes sure the password is the same as the confirm password field
    alert("Incorrect Confirmed Password");
  }
  else {
    alert("you win!")
  }
}