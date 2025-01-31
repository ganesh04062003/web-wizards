// Initialize the map
const map = L.map('map').setView([20.5937, 78.9629], 5);

// Add a tile layer (OpenStreetMap)
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
  attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

// Beach locations with descriptions
const beaches = {
  Goa: { lat: 15.5439, lng: 73.7553, description: 'Goa is famous for its beautiful beaches and vibrant nightlife.' },
  Kerala: { lat: 8.3889, lng: 76.9760, description: 'Kerala is known for its serene backwaters and sandy shores.' },
  Andaman: { lat: 11.7401, lng: 92.6586, description: 'The Andaman Islands are renowned for their crystal-clear waters and coral reefs.' },
  Pondicherry: { lat: 11.9130, lng: 79.8121, description: 'Pondicherry offers quiet beaches and a blend of French colonial architecture.' },
};

// Add markers for each beach
Object.keys(beaches).forEach(beach => {
  const { lat, lng, description } = beaches[beach];
  L.marker([lat, lng])
    .addTo(map)
    .bindPopup(`<b>${beach}</b><br>${description}`);
});

// Toggle beach list visibility
function toggleBeachList() {
  const beachList = document.getElementById("beach-list");
  beachList.style.display = beachList.style.display === "none" ? "block" : "none";
}
