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
    editBtn.innerHTML = `<svg ...></svg>`;

    // Append to shared wrapper
    let btnWrapper = document.querySelector("#floating-btns");
    if (!btnWrapper) {
        btnWrapper = document.createElement("div");
        btnWrapper.id = "floating-btns";
        document.body.appendChild(btnWrapper);
    }
    btnWrapper.appendChild(editBtn);

});
