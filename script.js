// Initialize the map
const map = L.map('map').setView([20.5937, 78.9629], 5); // Center map on India

// Add a tile layer (OpenStreetMap)
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
  attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

// Adding beach markers
const beaches = {
  Goa: { lat: 15.2993, lng: 74.124, description: 'Goa is famous for its beautiful beaches and vibrant nightlife.' },
  Kerala: { lat: 9.9312, lng: 76.2673, description: 'Kerala is known for its serene backwaters and sandy shores.' },
  Andaman: { lat: 11.7401, lng: 92.6586, description: 'The Andaman Islands are renowned for their crystal-clear waters and coral reefs.' },
  Pondicherry: { lat: 11.9130, lng: 79.8121, description: 'Pondicherry offers quiet beaches and a blend of French colonial architecture.' },
  Perupalem:{lat:16.3404,lng: 81.6018,description:'Perupalem Beach is known for its golden sands and tranquil atmosphere.'},
  Chirala:{lat:15.8246,lng:80.3521,description:'Chirala Beach offers scenic views  lively promenades and vibrant local culture.'},
  Marina :{lat:13.0827,lng:80.2707,description:'Marina Beach in Chennai is one of the longest urban beaches in the world, known for its scenic beauty, vibrant atmosphere, and iconic landmarks..'},
  Juhu :{lat:19.10,lng:72.83,description:'Juhu Beach in Mumbai is a bustling coastal spot, famous for its lively atmosphere, street food stalls, and stunning sunset views.'},
};

// Function to add markers for each beach
Object.keys(beaches).forEach(beach => {
  const { lat, lng } = beaches[beach];
  L.marker([lat, lng])
    .addTo(map)
    .bindPopup(`<b>${beach}</b><br>${beaches[beach].description}`);
});

// Function to show beach info on click
function showBeachInfo(beach) {
  alert(`Explore the beauty of ${beach}!`);
}
