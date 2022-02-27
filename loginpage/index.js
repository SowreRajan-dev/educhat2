function getVal() {
  var loginEmail = document.getElementById("email").value;
  var loginPassword = document.getElementById("password").value;
  //   if (!loginEmail && !loginPassword) return;
  if (loginEmail === "wynnsanity@wynn.com" && loginPassword === "wynn") {
    location.href = "/dashboard/index.html";
  } else if (loginEmail === "jacob@jack.com" && loginPassword === "jacob") {
    console.log("else if");
    location.href = "/dashboard-learner/index.html";
  }
  //   window.location.href = "/dashboard-learner/index.html";
  //   location.href = "/dashboard/index.html";
  // console.log(loginEmail, loginPassword);
}
