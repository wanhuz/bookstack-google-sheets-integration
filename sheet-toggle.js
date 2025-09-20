// sheet-toggle.js
document.addEventListener("DOMContentLoaded", () => {
  const iframe = document.querySelector("iframe[src*='docs.google.com/spreadsheets']");
  if (!iframe) return;

  // --- Mark page as fullscreen ---
  document.body.classList.add("sheet-fullscreen");

  // --- Extract Sheet ID ---
  const match = iframe.src.match(/\/d\/([a-zA-Z0-9-_]+)/);
  if (!match) return;
  const sheetId = match[1];

  // --- URLs ---
  const previewUrl = `https://docs.google.com/spreadsheets/d/${sheetId}/preview?embedded=true`;
  const editUrl    = `https://docs.google.com/spreadsheets/d/${sheetId}/edit?embedded=true`;

  // --- State ---
  const state = { inEditMode: false };
  iframe.src = previewUrl; // Start in preview mode

  // --- SVG icons ---
  const gridSVG = `
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
      <path d="M12 20h9M16.5 3.5a2.1 2.1 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z"/>
    </svg>
  `;
  const pencilSVG = `
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
      <path d="M3 4h7v7H3zM14 4h7v7h-7zM3 14h7v7H3zM14 14h7v7h-7z"/>
    </svg>
  `;

  // --- Create toggle button ---
  const sheetBtn = document.createElement("button");
  sheetBtn.id = "sheet-toggle-btn";
  sheetBtn.classList.add("floating-btn");
  sheetBtn.innerHTML = gridSVG;

  sheetBtn.onclick = () => {
    state.inEditMode = !state.inEditMode;
    iframe.src = state.inEditMode ? editUrl : previewUrl;
    sheetBtn.innerHTML = state.inEditMode ? pencilSVG : gridSVG;
    updateTitleBar();
  };

  //   Create page editing button

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

  // --- Append button to page ---
  const btnWrapper = document.createElement("div");
  btnWrapper.id = "floating-btns";
  btnWrapper.appendChild(sheetBtn);
  btnWrapper.appendChild(editBtn);
  document.body.appendChild(btnWrapper);
});
