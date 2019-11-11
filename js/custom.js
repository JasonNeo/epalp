studentSiema = new Siema({
  selector: '.siema-student',
  easing: 'ease-out',
  perPage: 1,
  startIndex: 0,
  draggable: true,
  multipleDrag: true,
  threshold: 20,
  loop: false,
  rtl: false,
  onInit: () => {},
  onChange: () => {},
});
document.querySelector('.prev-student').addEventListener('click', () => studentSiema.prev());
document.querySelector('.next-student').addEventListener('click', () => studentSiema.next());

leaderSiema = new Siema({
  selector: '.siema-leader',
  easing: 'ease-out',
  perPage: 1,
  startIndex: 0,
  draggable: true,
  multipleDrag: true,
  threshold: 20,
  loop: false,
  rtl: false,
  onInit: () => {},
  onChange: () => {},
});
document.querySelector('.prev-leader').addEventListener('click', () => leaderSiema.prev());
document.querySelector('.next-leader').addEventListener('click', () => leaderSiema.next());

mySiema1 = new Siema({
  selector: '.siema1',
  easing: 'ease-out',
  perPage: 1,
  startIndex: 0,
  draggable: true,
  multipleDrag: true,
  threshold: 20,
  loop: false,
  rtl: false,
  onInit: () => {},
  onChange: () => {},
});

const btn1_0 = document.querySelector(".btn1_0");
const btn1_1 = document.querySelector(".btn1_1");
const btn1_2 = document.querySelector(".btn1_2");
const btn1_3 = document.querySelector(".btn1_3");

btn1_0.addEventListener("click", () => mySiema1.goTo(0));
btn1_1.addEventListener("click", () => mySiema1.goTo(1));
btn1_2.addEventListener("click", () => mySiema1.goTo(2));
btn1_3.addEventListener("click", () => mySiema1.goTo(3));

mySiema2 = new Siema({
  selector: '.siema2',
  easing: 'ease-out',
  perPage: 1,
  startIndex: 0,
  draggable: true,
  multipleDrag: true,
  threshold: 20,
  loop: false,
  rtl: false,
  onInit: () => {},
  onChange: () => {},
});

const btn2_0 = document.querySelector(".btn2_0");
const btn2_1 = document.querySelector(".btn2_1");
const btn2_2 = document.querySelector(".btn2_2");
const btn2_3 = document.querySelector(".btn2_3");

btn2_0.addEventListener("click", () => mySiema2.goTo(0));
btn2_1.addEventListener("click", () => mySiema2.goTo(1));
btn2_2.addEventListener("click", () => mySiema2.goTo(2));
btn2_3.addEventListener("click", () => mySiema2.goTo(3));

mySiema3 = new Siema({
  selector: '.siema3',
  easing: 'ease-out',
  perPage: 1,
  startIndex: 0,
  draggable: true,
  multipleDrag: true,
  threshold: 20,
  loop: false,
  rtl: false,
  onInit: () => {},
  onChange: () => {},
});

const btn3_0 = document.querySelector(".btn3_0");
const btn3_1 = document.querySelector(".btn3_1");
const btn3_2 = document.querySelector(".btn3_2");
const btn3_3 = document.querySelector(".btn3_3");

btn3_0.addEventListener("click", () => mySiema3.goTo(0));
btn3_1.addEventListener("click", () => mySiema3.goTo(1));
btn3_2.addEventListener("click", () => mySiema3.goTo(2));
btn3_3.addEventListener("click", () => mySiema3.goTo(3));


mySiema4 = new Siema({
  selector: '.siema4',
  easing: 'ease-out',
  perPage: 1,
  startIndex: 0,
  draggable: true,
  multipleDrag: true,
  threshold: 20,
  loop: false,
  rtl: false,
  onInit: () => {},
  onChange: () => {},
});

const btn4_0 = document.querySelector(".btn4_0");
const btn4_1 = document.querySelector(".btn4_1");
const btn4_2 = document.querySelector(".btn4_2");
const btn4_3 = document.querySelector(".btn4_3");

btn4_0.addEventListener("click", () => mySiema4.goTo(0));
btn4_1.addEventListener("click", () => mySiema4.goTo(1));
btn4_2.addEventListener("click", () => mySiema4.goTo(2));
btn4_3.addEventListener("click", () => mySiema4.goTo(3));
