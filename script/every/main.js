document.querySelectorAll(".copyBTN").forEach(btn=>{
btn.addEventListener("click", () => {
  const text = btn.closest("pre").querySelector("code").textContent;
  navigator.clipboard.writeText(text);
})
})
