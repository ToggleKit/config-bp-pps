
const sideBarBtn = document.querySelector("div#side-bar-toggle");
const aside = document.querySelector("aside");
sideBarBtn.addEventListener("click", () => {
  aside.getAttribute('id') ? aside.removeAttribute("id") : aside.setAttribute("id", "show")
})
const asideLink = aside.querySelectorAll('a');
asideLink.forEach(a => {
  a.addEventListener('click', () => {
    if (aside.id === 'show') {
      aside.id = ""
    }
  })
})
