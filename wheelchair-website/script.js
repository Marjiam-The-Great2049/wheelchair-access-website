function searchPlaces() {
    const searchBox = document.querySelector('input[type="search"]');
    const searchText = searchBox.value.toLowerCase();

    const places = document.querySelectorAll('#places article');

    places.forEach(function(place) {
        const placeText = place.textContent.toLowerCase();

        if (placeText.includes(searchText)) {
            place.style.display = 'block';
        } else {
            place.style.display = 'none';
        }
    });
}

const map = L.map('map-container').setView(
    [11.8745, 75.3704],
    13
);

L.tileLayer(
    'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
    {
        attribution: '&copy; OpenStreetMap contributors'
    }
).addTo(map);

L.marker([11.8745, 75.3704])
    .addTo(map)
    .bindPopup(
        '<b>♿ Wheelchair Accessible Location</b><br>Accessible entrance and facilities.'
    );

