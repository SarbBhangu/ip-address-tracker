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
const formElement = document.querySelector(".ip-form");
const inputElement = document.querySelector(".ip-input");


async function fetchUserIP() {
    try {
        const response = await fetch("https://api.ipify.org?format=json");

        if (!response.ok) {
            throw new Error("Failed to fetch IP address")
        }

        const data = await response.json();
        console.log("IP data from API:", data);

        ipElement.textContent = data.ip;

        fetchGeoData(data.ip);
    
    }catch (error) {
        console.error("Error in fetchUserIP:", error);

        ipElement.textContent = "Unable to load IP";
        ipElement.style.color = "red";
    }
}
fetchUserIP();

async function fetchGeoData(ip){
    const apiKey = "YOUR_API_KEY_HERE"; 

    const url = `https://geo.ipify.org/api/v2/country,city?apiKey=${apiKey}&ipAddress=${ip}`;

    try {
    const response = await fetch(url);

        if (!response.ok) {
        throw new Error(`Geo API request failed with status ${response.status}`);
        }

        const data = await response.json();
        console.log("fetchGeoData result:", data);

        const { city, region, country, timezone, lat, lng} = data.location 

        locationElement.textContent = `${city}, ${region}, ${country}`;
        timezoneElement.textContent = `UTC ${timezone}`;
        ispElement.textContent = data.isp || "Unknown ISP";

        updateMap(lat, lng);

    } catch (error) {
        console.error("Error in fetchGeoData:", error);

        locationElement.textContent = "Location unavailable";
        timezoneElement.textContent = "Timezone unavailable";
        ispElement.textContent = "ISP unavailable";
  }
}


