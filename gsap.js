const header = document.querySelector("header");
const canvas = document.querySelector(".drawing-area");
const instruction = document.querySelector("#Vaibhav");

const tl = new TimelineMax();

tl.fromTo(
  canvas,
  1,
  { height: "0vh" },
  { height: "100vh" },
  { ease: Power2.easeInOut }
).fromTo(
  header,
  1.5,
  { y: "-1000%", opacity: "0" },
  { y: "0%", opacity: "20" },
  { ease: Power2.easeInOut }
).fromTo(
    instruction,
    { y: "-1000%", opacity: "0" },
  { y: "0%", opacity: "20" },
  { ease: Power2.easeInOut }
)