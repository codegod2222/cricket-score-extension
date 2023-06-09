# Cric_chrome_extension

This extension brings you the latest match updates, scores, and statistics from various cricket tournaments around the world.

With our user-friendly interface, you can easily access the live scores of ongoing cricket matches without the need to navigate to different websites or applications. The extension provides you with instant access to scores, allowing you to keep up with the action as it happens.

Note: This extension relies on an internet connection to fetch live data. It is intended for informational purposes only and does not offer live streaming of matches.


## How to run Chrome extension

The Build Folder:

Locate the build folder of your Chrome extension from the this file project. 
This folder typically contains all the necessary files and assets required for your extension to function. Select all the files and folders within the build folder. Download this folder to upload it later.


Upload the Extension Package:

open Manage extension to turn on developer mode.
Click on Load unpacked to upload Build folder for this extension.


## If get cors error

change the origin from localhost to your extension link

```javascript


// server/index.js 

app.use(
  cors({
    // origin: "chrome://extensions/?errors=kekciafpgdefoippkloamgmcejkbbbbj",
    origin: "http://localhost:3000",
    credentials: true,
  })
);
```


## Overview
![Screenshot 2023-06-09 134114](https://github.com/jynt1401/Cric_chrome_extension/assets/100084399/5a1c8392-380b-4098-ba33-b8d20023bce6)
![Screenshot 2023-06-09 134133](https://github.com/jynt1401/Cric_chrome_extension/assets/100084399/fdaba31b-7a5f-41a1-9a5d-85200cffd831)
