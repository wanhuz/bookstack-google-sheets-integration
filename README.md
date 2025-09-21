# Bookstack Google Sheets Integration

A lightweight hack to embed Google Sheets into Bookstack pages in a fullscreen, interactive way, with convenient floating buttons for editing the sheet or the Bookstack page itself.

---

## Screenshots

### Preview Mode
<img width="1919" height="915" alt="Preview" src="https://github.com/user-attachments/assets/c5b85aaa-c2a9-4a77-937b-673f2f0acc17" />


### Edit Mode
<img width="1918" height="918" alt="Editor" src="https://github.com/user-attachments/assets/0341cecd-b8df-4592-a3f4-64b89d9bf0f5" />


---

## Features

- **Seamless Google Sheets Integration**: Work with your Google Sheet inside Bookstack.  
- **Floating Buttons**:  
  - **Sheet Mode Toggle**: Switch between preview (`preview?embedded=true`) and edit (`edit?embedded=true`) modes of the Google Sheet.  
  - **Page Edit**: Open the Bookstack page editor to make change to the page.  
- **Dynamic Title Bar**: Displays the Bookstack page title above the sheet when in preview mode.  
- **Responsive**: Automatically adjusts iframe height based on header and title bar height.  

> ⚠️ Note: Touch scrolling on mobile devices inside the iframe may not behave perfectly due to browser limitations.

---

## Installation

1. Clone or download this repository.  

2. Add the integration to your Bookstack instance in one of two ways:

   **Option A – Inline Copy:**  
   Copy the contents of `script.js` and `style.css` into the **Custom HTML Head** section of your Bookstack instance.

   **Option B – Link Files:**  
   Place `script.js` and `style.css` somewhere your Bookstack instance can serve them, then add:

   ```html
   <link rel="stylesheet" href="/path/to/google-sheet-integration.css">
   <script src="/path/to/google-sheet-integration.js"></script>
   ```

---



## Usage

1. Create a new Google Sheets page (or use an existing one) and set the sharing permissions so it is editable.  
2. Create a new Bookstack page, paste and change code below to source code of the page ("<>" icon) and save. The link from 1. should be inside src= of the code.

```html
<iframe src="https://docs.google.com/spreadsheets/d/YOUR_SHEET_ID/edit?embedded=true"></iframe>
```

- The sheet will load in **preview mode** by default.  
- Click the **floating grid/pencil icon** to toggle between preview and edit modes of the Google Sheet.  
- Click the **gear icon** to open the Bookstack page editor.

---

## Known Limitations

- Mobile horizontal touch scrolling may feel awkward inside the iframe.
- The hack relies on position: fixed for fullscreen behavior, which can conflict with some custom Bookstack themes or plugins.

## License

MIT License – free to use and modify for personal or organizational Bookstack instances.
