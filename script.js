document.addEventListener("DOMContentLoaded", () => {
// active link 

  const sections = document.querySelectorAll("section");
  const navLinks = document.querySelectorAll(".nav-link");
  window.addEventListener("scroll", () => {
    let current = "";
    sections.forEach(section => {
      const sectionTop = section.offsetTop - 120;
      if (window.scrollY >= sectionTop) {
        current = section.getAttribute("id");
      }
    });
    navLinks.forEach(link => {
      link.classList.remove("active-link");
      if (link.getAttribute("href") === `#${current}`) {
        link.classList.add("active-link");
      }
    });
  });

// scroll 
  const scrollBtn = document.querySelector(".scroll-top");
  window.addEventListener("scroll", () => {

    if (window.scrollY > 300) {
      scrollBtn.style.opacity = "1";
      scrollBtn.style.pointerEvents = "auto";
    }
    else {
      scrollBtn.style.opacity = "0";
      scrollBtn.style.pointerEvents = "none";
    }

  });
window.dispatchEvent(new Event("scroll"));

// typing effct 
  const text = [
    "Aspiring Web Developer",
    "Frontend Developer",
    "UI Enthusiast",
    "Problem Solver"
  ];

  let count = 0;
  let index = 0;
  function type() {
    if (count === text.length) {
      count = 0;
    }
    const currentText = text[count];
    const letter = currentText.slice(0, ++index);
    document.querySelector(".typing").textContent = letter;
    if (letter.length === currentText.length) {
      count++;
      index = 0;
      setTimeout(type, 1200);
    } else {
      setTimeout(type, 100);
    }
  }
  type();

// auto close nav 
const menu=document.getElementById("menu");
navLinks.forEach(link=>{
link.addEventListener("click",()=>{
if(menu.classList.contains("show")){
const bsCollapse=new bootstrap.Collapse(menu,{
toggle:false
});
bsCollapse.hide();
}
});
});
});
