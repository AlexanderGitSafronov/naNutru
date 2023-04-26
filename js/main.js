const timer = document.querySelector(".timer");
const mainDate = document.querySelector(".main__date");
const newDate = new Date();
const popap = document.querySelector(".popap");
const popapForm = document.querySelector(".popap_form");
const closePopup = document.querySelector(".close_popap_btn");
const swipeToForm = document.querySelectorAll(".swipe__to_form");
const formToPage = document.querySelector("#form");
const body = document.querySelector("body");
const phoneInputs = document.querySelectorAll("input[data-tel-input");

let time = 600;
if (time > 0) {
  setInterval(() => {
    const minutes = Math.floor(time / 60);
    let second = time % 60;
    second = second < 10 ? "0" + second : second;
    timer.innerHTML = `${minutes} : ${second}`;
    time--;
    if (time === 0) {
      time = 600;
    }
  }, 1000);
}

function getUserTime(date) {
  let year = date.getFullYear();
  let month = date.getMonth() + 1;
  let day = date.getDate() - 5;
  month = month < 10 ? "0" + month : month;
  day = day < 10 ? "0" + day : day;
  mainDate.innerHTML = `${day}.${month}.${year}`;
}
getUserTime(newDate);

window.onload = function () {
  setTimeout(() => {
    popap.classList.add("popap_show");
    if (popap.classList.contains("popap_show")) {
      body.style.overflow = "hidden";
    }
  }, 20000);
};

body.addEventListener("mouseout", (e) => {
  if (e.relatedTarget === null) {
    popap.classList.add("popap_show");
    if (popap.classList.contains("popap_show")) {
      body.style.overflow = "hidden";
    }
  }
});

popap.addEventListener("click", () => {
  popap.classList.remove("popap_show");
  body.style.overflow = "visible";
});
popapForm.addEventListener("click", (e) => {
  e.stopPropagation();
});
closePopup.addEventListener("click", () => {
  popap.classList.remove("popap_show");
  body.style.overflow = "visible";
});
swipeToForm.forEach((item) => {
  item.addEventListener("click", (e) => {
    e.preventDefault();
    popap.classList.remove("popap_show");
    body.style.overflow = "visible";
    formToPage.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  });
});

// Musk to tel
let maskOptions = {
  mask: "+7(000)000-00-00",
  lazy: false,
};
let mask;
phoneInputs.forEach((item) => {
  mask = new IMask(item, maskOptions);
});
