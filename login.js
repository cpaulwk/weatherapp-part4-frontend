//***** Register infos *****
document.querySelector("#register").addEventListener("click", function () {
  const registerName = document.querySelector("#registerName").value;
  const registerEmail = document.querySelector("#registerEmail").value;
  const registerPassword = document.querySelector("#registerPassword").value;

  fetch("http://localhost:3000/users/signup", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
    body: JSON.stringify({
      name: registerName,
      email: registerEmail,
      password: registerPassword,
    }),
  })
    .then((response) => response.json())
    .then((result) => {
      switch (true) {
        case result.error == "Missing or empty fields":
          console.log(result.error);
          break;
        case result.error == "User already exists":
          console.log(result.error);
          break;
        case result.result:
          window.location.assign("index.html");
          return true;
        default:
          console.log("Invalid registration");
      }
    });
});
//***** End of Register infos *****/

// ***** Connection infos *****
document.querySelector("#connection").addEventListener("click", function () {
  const connectionEmail = document.querySelector("#connectionEmail").value;
  const connectionPassword = document.querySelector(
    "#connectionPassword"
  ).value;

  fetch("http://localhost:3000/users/signin", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
    body: JSON.stringify({
      email: connectionEmail,
      password: connectionPassword,
    }),
  })
    .then((response) => response.json())
    .then((result) => {
      switch (true) {
        case result.error == "Missing or empty fields":
          console.log(result.error);
          break;
        case result.error == "User not found":
          console.log(result.error);
          break;
        case result.result:
          window.location.assign("index.html");
          return true;
        default:
          console.log("Invalid login information");
      }
    });
});
// ***** End of Connection infos *****
