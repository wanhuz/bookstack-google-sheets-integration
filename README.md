# BookStack Google Sheets Integration

A lightweight hack to embed Google Sheets into BookStack pages in a fullscreen, interactive way, with convenient floating buttons for editing the sheet or the BookStack page itself.

---

## Features

- **Seamless Google Sheets Integration**: Work with your Google Sheet inside Bookstack.  
- **Floating Buttons**:  
  - **Sheet Mode Toggle**: Switch between preview (`preview?embedded=true`) and edit (`edit?embedded=true`) modes of the Google Sheet.  
  - **Page Edit**: Open the BookStack page editor to make change to the page.  
- **Dynamic Title Bar**: Displays the BookStack page title above the sheet when in preview mode.  
- **Responsive**: Automatically adjusts iframe height based on header and title bar height.  

> ⚠️ Note: Touch scrolling on mobile devices inside the iframe may not behave perfectly due to browser limitations.

---

## Installation

1. Clone or download this repository.  

2. Add the integration to your BookStack instance in one of two ways:

   **Option A – Inline Copy:**  
   Copy the contents of `script.js` and `style.css` into the **Custom HTML Head** section of your BookStack instance.

   **Option B – Link Files:**  
   Place `script.js` and `style.css` somewhere your BookStack instance can serve them, then add:

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
- Click the **gear icon** to open the BookStack page editor.

---

## Known Limitations

- Mobile horizontal touch scrolling may feel awkward inside the iframe.
- The hack relies on position: fixed for fullscreen behavior, which can conflict with some custom BookStack themes or plugins.

## License

MIT License – free to use and modify for personal or organizational BookStack instances.
