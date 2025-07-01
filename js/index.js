const navbar = document.getElementById("navbar");
const firstConter = document.getElementById("firstConter");
const secondCounter = document.getElementById("secondCounter");
const thirdCounter = document.getElementById("thirdCounter");
const fourthCounter = document.getElementById("fourthCounter");

document.querySelectorAll(".card-pro").forEach((card) => {
  card.addEventListener("click", function () {
    const img = this.querySelector("img");
    modalImage.src = img.src;
  });
});

window.addEventListener("scroll", function () {
  if (window.pageYOffset > 660) {
    navbar.classList.replace("bg-transparent","bg-dark")
  }else{
    navbar.classList.add("bg-transparent")
  }
});

let started = false;

window.addEventListener("scroll", function () {
  if (window.pageYOffset > 2200 && !started) {
    started = true;

    // Counter 1
    let count1 = 0;
    const x = setInterval(() => {
      count1++;
      firstConter.innerText = count1;
      if (count1 === 200) clearInterval(x);
    }, 10);

    // Counter 2
    let count2 = 0;
    const y = setInterval(() => {
      count2++;
      secondCounter.innerText = count2;
      if (count2 === 345) clearInterval(y);
    }, 10);

    // Counter 3
    let count3 = 0;
    const z = setInterval(() => {
      count3++;
      thirdCounter.innerText = count3;
      if (count3 === 1800) clearInterval(z);
    }, 5);

    // Counter 4
    let count4 = 0;
    const w = setInterval(() => {
      count4++;
      fourthCounter.innerText = count4;
      if (count4 === 1200) clearInterval(w);
    }, 7);
  }
});