document.querySelectorAll(".copyBTN").forEach(btn=>{
btn.addEventListener("click", () => {
  const text = btn.closest("pre").querySelector("code").textContent;
  navigator.clipboard.writeText(text);
})
})
const downloadLink = document.getElementById('downloadLink');
if(downloadLink){
  downloadLink.addEventListener('click', function(e) {
    e.preventDefault();
    fetch("https://raw.githubusercontent.com/ToggleKit/proposejs/refs/tags/v2.0.1/engine.formatted.js")
      .then(response => response.blob())
      .then(blob => {
        const url = window.URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.style.display = 'none';
        a.href = url;
        a.download = 'engine.formatted.js';
        document.body.appendChild(a);
        a.click();
        window.URL.revokeObjectURL(url);
      })
      .catch(() => alert('Failed to download file.'));
  });
}
