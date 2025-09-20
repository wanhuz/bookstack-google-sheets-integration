document.addEventListener("DOMContentLoaded", () => {
  const iframe = document.querySelector("iframe[src*='docs.google.com/spreadsheets']");
  if (!iframe) return;

  // --- Mark page as fullscreen ---
  document.body.classList.add("sheet-fullscreen");

  // --- Extract Sheet ID ---
  const match = iframe.src.match(/\/d\/([a-zA-Z0-9-_]+)/);
  if (!match) return;
  const sheetId = match[1];

  // --- Base URLs ---
  const previewUrl = `https://docs.google.com/spreadsheets/d/${sheetId}/preview?embedded=true`;
  const editUrl    = `https://docs.google.com/spreadsheets/d/${sheetId}/edit?embedded=true`;

  // --- State ---
  let inEditMode = false;
  iframe.src = previewUrl; // Start in preview mode

  // --- Helper to create floating buttons ---
  function createButton({ id, svgContent, onClick }) {
    const btn = document.createElement("button");
    btn.id = id;
    btn.classList.add("floating-btn");
    btn.innerHTML = svgContent;
    btn.onclick = onClick;
    return btn;
  }

  // --- SVG Icons ---
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
  const editSVG = `
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" aria-hidden="true">
      <path fill="#fff" d="M19.14 12.94c.04-.31.06-.63.06-.94s-.02-.63-.06-.94l2.03-1.58c.18-.14.23-.41.12-.61l-1.92-3.32c-.12-.21-.37-.3-.59-.22l-2.39.96c-.5-.38-1.02-.7-1.6-.94L14.5 2.81c-.03-.23-.25-.41-.5-.41h-4c-.25 0-.47.18-.5.41L8.34 5.02c-.57.24-1.09.56-1.59.94L4.36 5c-.22-.08-.47.01-.59.22L1.85 8.55c-.11.21-.06.48.12.61l2.02 1.58c-.04.31-.06.63-.06.94s.02.63.06.94L1.94 14.95c-.18.14-.23.41-.12.61l1.92 3.32c.12.21.37.3.59.22l2.39-.96c.5.38 1.02.7 1.6.94l.67 2.21c.03.23.25.41.5.41h4c.25 0 .47-.18.5-.41l.67-2.21c.58-.24 1.1-.56 1.6-.94l2.39.96c.22.08.47-.01.59-.22l1.92-3.32c.12-.21.07-.48-.12-.61l-2.03-1.58zM12 15.5a3.5 3.5 0 1 1 0-7 3.5 3.5 0 0 1 0 7z"/>
    </svg>
  `;

  // --- Create buttons ---
  const sheetBtn = createButton({
    id: "sheet-toggle-btn",
    svgContent: gridSVG,
    onClick: () => {
      inEditMode = !inEditMode;
      iframe.src = inEditMode ? editUrl : previewUrl;
      sheetBtn.innerHTML = inEditMode ? pencilSVG : gridSVG;
      updateTitleBar();
      updateIframePosition();
    }
  });

  const pageBtn = createButton({
    id: "floating-edit-btn",
    svgContent: editSVG,
    onClick: () => { window.location.href = window.location.href + "/edit"; }
  });

  // --- Button wrapper ---
  const btnWrap = document.createElement("div");
  btnWrap.id = "floating-btns";
  btnWrap.appendChild(sheetBtn);
  btnWrap.appendChild(pageBtn);
  document.body.appendChild(btnWrap);

  // --- Title bar ---
    const pageTitle = document.querySelector("#bkmrk-page-title")?.innerText.trim() || "Untitled";
    const titleBar = document.createElement("div");
    titleBar.className = "sheet-title-bar";
    titleBar.id = "sheet-title-bar";
    titleBar.innerText = pageTitle;

    // Insert as first child of #content
    const contentDiv = document.getElementById("content");
    if (contentDiv) {
        contentDiv.insertBefore(titleBar, contentDiv.firstChild);
    }

  function updateTitleBar() {
    titleBar.style.display = inEditMode ? "none" : "block";
  }
  updateTitleBar();

    function updateIframePosition() {
        const header = document.getElementById("header");
        const titleBar = document.getElementById("sheet-title-bar");

        const headerHeight = header?.getBoundingClientRect().height || 0;
        const titleHeight  = titleBar?.getBoundingClientRect().height || 0;
        const topOffset = headerHeight + titleHeight;

        iframe.style.position = "fixed";
        iframe.style.top = `${topOffset}px`;
        iframe.style.left = "0";
        iframe.style.width = "100vw";
        iframe.style.height = `calc(100vh - ${topOffset}px)`;
        iframe.style.border = "0";
        iframe.style.margin = "0";
        iframe.style.padding = "0";
    }

    // Call initially
    updateIframePosition();

    // Update on resize in case header/title changes
    window.addEventListener("resize", updateIframePosition);



});
