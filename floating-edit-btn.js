// floating-edit-btn.js
document.addEventListener("DOMContentLoaded", () => {
  const iframe = document.querySelector("iframe[src*='docs.google.com/spreadsheets']");
  if (!iframe) return;

  // Enable sheet fullscreen
  document.body.classList.add("sheet-fullscreen");

  const editBtn = document.createElement("button");
  editBtn.id = "floating-edit-btn";
  editBtn.classList.add("floating-btn");
  editBtn.title = "Edit Page";
  editBtn.innerHTML = `
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
      <path d="M12 20h9"/>
      <path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z"/>
    </svg>
  `;
  editBtn.onclick = () => window.location.href = window.location.href + "/edit";

  document.body.appendChild(editBtn);
});
