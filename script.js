const map = L.map('map')
let marker;

L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);


function updateMap(lat, lng) {
    map.setView([lat, lng], 13);

        if(marker) {
            marker.setLatLng([lat,lng]);
        }else {
            marker = L.marker([lat,lng]).addTo(map);
        }
}
updateMap(39.1031, -84.5120);

const ipElement = document.getElementById("ip-address");
const locationElement = document.getElementById("location");
const timezoneElement = document.getElementById("timezone");
const ispElement = document.getElementById("isp");

async function fetchUserIP() {
    try {
        const response = await fetch("https://api.ipify.org?format=json");

        if (!response.ok) {
            throw new Error("Failed to fetch IP address")
        }

        const data = await response.json();
        console.log("IP data from API:", data);

        ipElement.textContent = data.ip;
    
    }catch (error) {
        console.error("Error in fetchUserIP:", error);

        ipElement.textContent = "Unable to load IP";
        ipElement.style.color = "red";
    }
}
fetchUserIP();

