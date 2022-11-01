console.log("Form Validation");

const submit = document.getElementById("submit");
submit.addEventListener("click", () => {

  console.log("submit");

  const userName = document.getElementById("userName").value;
  const userNumber = document.getElementById("userNumber").value;
  const userEmail = document.getElementById("userEmail").value;
  const Userpass = document.getElementById("Userpass").value;
  const Userconpass = document.getElementById("Userconpass").value;

  if (userName == "") {
    document.getElementById("name").textContent = " ** Add Some Characters ";
    return false;
  }
  if (userName.length <= 2 || userName.length >= 20) {
    document.querySelector("#name").innerHTML =
      "**  Add Characters between 2 to 20 letters";
    return false;
  }

  if (userNumber == "") {
    document.getElementById("num").textContent = " ** Add Number ";
    return false;
  }
  if (userNumber.length != 10) {
    document.getElementById("num").textContent = " ** Add 10 digit Number ";
    return false;
  }
  if (isNaN(userNumber)) {
    document.getElementById("num").textContent = " ** Add only Number ";
    return false;
  }

  if (userEmail == "") {
    document.getElementById("email").textContent = " ** Add correct Email ";
    return false;
  }
  if (
    userEmail.charAt(userEmail.length - 4) != "." &&
    userEmail.charAt(userEmail.length - 3) != "."
  ) {
    document.getElementById("email").textContent = " ** Add  . correct Email ";
    return false;
  }
  if (userEmail.indexOf("@") <= 0) {
    document.getElementById("email").textContent = " ** Add @ correct Email ";
    return false;
  }

  if (Userpass == "") {
    document.getElementById("pass").textContent = " ** Add Password ";
    return false;
  }
  if (Userpass.length <= 5 || Userpass.length >= 20) {
    document.getElementById("pass").innerHTML =
      "**  Add Characters between 5 to 20 letters";
    return false;
  }

  if (Userpass != Userconpass) {
    document.getElementById("conpass").textContent =
      " **  confirm Password doesn't Match with Password ";
    return false;
  }

  if (Userconpass == "") {
    document.getElementById("conpass").textContent =
      " ** Add correct Password ";
    return false;
  }

  document.getElementById("userName").value = "";
  document.getElementById("userNumber").value = "";
  document.getElementById("userEmail").value = "";
  document.getElementById("Userpass").value = "";
  document.getElementById("Userconpass").value = "";
  
});
