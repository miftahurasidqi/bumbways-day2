function clickBtn() {
  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const phone = document.getElementById("phone").value;
  const subject = document.getElementById("subject").value;
  const message = document.getElementById("message").value;

  const valid = validate(name, email, phone, subject, message);

  if (valid) {
    const emailDestination = "samtek380@gmail.com";
    const myEmail = `mailto:${emailDestination}?subject=${subject}&body=Halo nama saya ${name}, ${message} (email : ${email}, phone : ${phone})`;
    sendEmail(myEmail);
  }
}

function validate(name, email, phone, subject, message) {
  if (name == "") {
    alert("Please enter your name");
    return false;
  }
  if (email == "") {
    alert("Please enter your email");
    return false;
  }
  if (phone == "") {
    alert("Please enter your phone");
    return false;
  }
  if (subject == "") {
    alert("Please enter your subject");
    return false;
  }
  if (message == "") {
    alert("Please enter your message");
    return false;
  }
  return true;
}

function clearData() {
  name.value = "";
  email.value = "";
  phone.value = "";
  subject.value = "";
  message.value = "";
}

function sendEmail(myEmail) {
  let a = document.createElement("a");
  a.href = myEmail;
  a.click();
  clearData();
}
