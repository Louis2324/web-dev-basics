const btn = document.getElementById("pjbtn");
btn.addEventListener("click", () => {
  alert("I was too lazy to add a project section, check my github instead");
});

const btn2 = document.getElementById("talk");
btn2.addEventListener("click", () => {
  alert("Refer to my contact links to talk to me");
});

const btn3 = document.getElementById("submit");
btn3.addEventListener("click", (e) => {
  e.preventDefault();
  const nameInput = document.getElementById("name");
  const emailInput = document.getElementById("email");
  const subjectInput = document.getElementById("subject");
  const messageInput = document.getElementById("message");

  nameInput.value = "";
  emailInput.value = "";
  subjectInput.value = "";
  messageInput.value = "";

  alert("Thank you for your message! I'll get back to you soon.");
  console.log("Form submitted");
});
