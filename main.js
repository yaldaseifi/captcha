let captch = "ABCDEFGHIJKLMNOPQRSTUVWXYZacdefghijklmnopqrstuvwxyz0123456789";
let click = document.querySelector("button#click");
let div = document.querySelector("div.captcha");
let j = document.querySelector("div.j");
let type = document.querySelector("input#type");
let btn = document.querySelector("button#done");
click.addEventListener("click", function () {
  gdata();
});
btn.addEventListener("click", function () {
  if (type.value === generate) {
    j.innerHTML = "ok :)";
  } else {
    j.innerHTML = "try again";
    gdata();
  }
});
function gdata() {
  generate =
    captch.charAt(Math.random() * 61) +
    captch.charAt(Math.random() * 61) +
    captch.charAt(Math.random() * 61) +
    captch.charAt(Math.random() * 61) +
    captch.charAt(Math.random() * 61);
  div.innerHTML = generate;
}
