document.addEventListener("DOMContentLoaded", () => {
  const iframe = document.querySelector("iframe[src*='docs.google.com/spreadsheets']");
  if (!iframe) return;


  const state = window.state.inEditMode;
  // --- Create title bar ---
  const pageTitle = document.querySelector("#bkmrk-page-title")?.innerText.trim() || "Untitled";
  const titleBar = document.createElement("div");
  titleBar.className = "sheet-title-bar";
  titleBar.innerText = pageTitle;
  iframe.parentNode.insertBefore(titleBar, iframe);

  function updateTitleBar() {
    titleBar.style.display = state.inEditMode ? "none" : "block";
  }

  updateTitleBar(); // initial
});
