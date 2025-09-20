document.addEventListener("DOMContentLoaded", () => {
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
