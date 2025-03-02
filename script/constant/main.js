const sideBarBtn = document.querySelector("div#side-bar-toggle");
const aside = document.querySelector("#HTML2");

sideBarBtn.addEventListener("click", () => {
  aside.classList.toggle("show");
});

const asideLink = aside.querySelectorAll('a');
asideLink.forEach(a => {
  a.addEventListener('click', () => {
    if (aside.classList.contains('show')) {
      aside.classList.remove("show");
    }
  });
});
