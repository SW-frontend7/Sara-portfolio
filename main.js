let darkMode = document.querySelector(".mode");
let leftSection = document.querySelector(".left");
let rightSection = document.querySelector(".right");
let rightImage = document.querySelector(".right .image");
let myInformation = document.querySelectorAll(".information");
let footer = document.querySelector("footer");
let allLi = document.querySelectorAll(".links-nav li");
let skills = document.querySelectorAll(".skills");
let portfolio = document.querySelectorAll(".portfolio");
let blog = document.querySelectorAll(".blog");
let allSectios = document.querySelectorAll("section");
let contact = document.querySelectorAll(".contact");
let loader_main = document.querySelector(".loader-main");
let allLisFilter = document.querySelectorAll(".links-filter li");
let allBoxexFilter = document.querySelectorAll(".content-boxes .box");

let myStorage = window.localStorage.getItem("option");

window.addEventListener("load", () => {
  if (myStorage !== null) {
    if (myStorage === "dark") {
      document.body.classList.add("dark");
      darkMode.classList.add("light");
      rightSection.classList.add("light");
      leftSection.classList.add("light");
      rightImage.classList.add("dark");
      footer.classList.add("dark");
      loader_main.classList.add("dark");
      skills.forEach((skill) => skill.classList.add("dark"));
      myInformation.forEach((inf) => inf.classList.add("dark"));
      portfolio.forEach((pro) => pro.classList.add("dark"));
      blog.forEach((blo) => blo.classList.add("dark"));
      contact.forEach((con) => con.classList.add("dark"));
    } else {
      document.body.classList.remove("dark");
      darkMode.classList.remove("light");
      rightSection.classList.remove("light");
      leftSection.classList.remove("light");
      rightImage.classList.remove("dark");
      footer.classList.remove("dark");
      loader_main.classList.remove("dark");
      myInformation.forEach((inf) => inf.classList.remove("dark"));
      skills.forEach((skill) => skill.classList.remove("dark"));
      portfolio.forEach((pro) => pro.classList.remove("dark"));
      blog.forEach((blo) => blo.classList.remove("dark"));
      contact.forEach((con) => con.classList.remove("dark"));
    }
  }
});

darkMode.addEventListener("click", (e) => {
  document.body.classList.toggle("dark");
  e.currentTarget.classList.toggle("light");
  rightSection.classList.toggle("light");
  leftSection.classList.toggle("light");
  rightImage.classList.toggle("dark");
  footer.classList.toggle("dark");
  loader_main.classList.toggle("dark");
  skills.forEach((skill) => skill.classList.toggle("dark"));
  portfolio.forEach((pro) => pro.classList.toggle("dark"));
  myInformation.forEach((inf) => inf.classList.toggle("dark"));

  blog.forEach((blo) => blo.classList.toggle("dark"));
  contact.forEach((con) => con.classList.toggle("dark"));

  window.localStorage.setItem(
    "option",
    e.currentTarget.classList.contains("light") ? "dark" : "light"
  );
});

allLi.forEach((li) => {
  li.addEventListener("click", (e) => {
    allLi.forEach((li) => li.classList.remove("active"));
    e.currentTarget.classList.add("active");
    allSectios.forEach((section) => section.classList.remove("active"));
    document
      .querySelector(e.currentTarget.dataset.section)
      .classList.add("active");
  });
});

allLisFilter.forEach((li) => {
  li.addEventListener("click", (e) => {
    allLisFilter.forEach((li) => li.classList.remove("active"));
    e.currentTarget.classList.add("active");

    allBoxexFilter.forEach((box) => {
      box.style.opacity = "0";
      box.style.display = "none";
    });

    document.querySelectorAll(e.currentTarget.dataset.filter).forEach((el) => {
      el.style.opacity = "1";
      el.style.display = "block";
    });
  });
});


function opac() {
  setTimeout(() => {
    loader_main.style.opacity = "0";
    loader_main.style.pointerEvents = "none";
  }, 3000);
}

opac();
