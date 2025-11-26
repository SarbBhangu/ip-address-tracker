## IP Address Tracker

A simple and interactive IP Address Tracker built using HTML, CSS, JavaScript, Leaflet.js, and two public APIs.
The app allows users to:

- Automatically detect their current IP address

- Display location details such as city, region, timezone, and ISP

- Search for any IP address or domain

- Show the exact location on a live, interactive map

This project was completed as part of a Frontend Mentor challenge and reinforced key skills such as API integration, DOM manipulation, async JavaScript, and responsive design.

# Live Demo
View the live app here:
https://sarbbhangu.github.io/ip-address-tracker/

# Whats inside

ip-address-tracker/
- index.html
- styles.css
- script.js
- README.md
- images/
- design/
- .gitignore

# How it works

1. Enter an IP adress or domain (try 8.8.8.8)
2. Click search button
3. Map updates automatically
4. App loads your own IP adresss when the page first loads

# Reflection

This project helped me strengthen my understanding of JavaScript, working with APIs, and controlling asynchronous code. I built the app step-by-step, starting with the basic layout and then adding features one at a time. The biggest challenge early on was getting the different API calls to work together in the right order. Using async/await, testing each function separately, and adding error handling helped me understand how data flows through the app. It also made debugging much easier.

Another important skill I learned was how to safely manage API keys. At first, I didn’t realize why keys shouldn’t be pushed to GitHub, but by creating a separate config.js file and ignoring it with .gitignore, I learned the correct way to protect sensitive information. Styling the project for both mobile and desktop also taught me how to use responsive design effectively. Overall, this project gave me confidence in fetching data, updating the DOM, working with maps, and building a complete feature from start to finish.



