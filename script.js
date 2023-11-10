const img_box = document.querySelector(".img_box");
const img_wrap = document.querySelector(".img_wrap");
const original_img = document.getElementById("original_img");
const resizer = document.getElementById("resizer");

original_img.style.width = img_box.offsetWidth + "px";

let left_space = img_box.offsetLeft;
img_box.addEventListener("mousemove", (e) => {
  let img_widht = e.pageX - left_space + "px";
  img_wrap.style.width = img_widht;
  resizer.style.left = img_widht;
});
