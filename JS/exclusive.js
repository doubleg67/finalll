document.addEventListener("DOMContentLoaded", function () {
  const locBtn = document.querySelector(".loc");
  const cityInp = document.querySelector(".city-input");
  const message = document.querySelector(".message");
  const search = document.querySelector(".search");
  let map;

  const initialLatitude = 51.5074;
  const initialLongitude = -0.1278;

  showMap(initialLatitude, initialLongitude);

  locBtn.addEventListener("click", function () {
    if ("geolocation" in navigator) {
      console.log(navigator);
      navigator.geolocation.getCurrentPosition((position) => {
        const { latitude, longitude } = position.coords;
        fetchLocationData(latitude, longitude);
      });
    } else {
      message.textContent = "Geolocation is not available on this device.";
    }
  });

  search.addEventListener("click", function () {
    const address = cityInp.value;
    if (address) {
      const url = `https://nominatim.openstreetmap.org/search?q=${address}&format=json`;
      fetch(url)
        .then((res) => res.json())
        .then((data) => {
          if (data.length > 0) {
            const latitude = data[0].lat;
            const longitude = data[0].lon;
            fetchLocationData(latitude, longitude);
          } else {
            message.textContent = "Location not found.";
          }
        })
        .catch((error) => {
          console.error("Error fetching location:", error);
          message.textContent = "Failed to fetch location data.";
        });
    }
  });

  function fetchLocationData(latitude, longitude) {
    showMap(latitude, longitude);

    const overpassUrl = `https://overpass-api.de/api/interpreter?data=[out:json];node["brand"="Porsche"](around:50000,${latitude},${longitude});out;`;
    fetch(overpassUrl)
      .then((res) => res.json())
      .then((data) => {
        if (data.elements.length > 0) {
          data.elements.forEach((dealer) => {
            const dealerLat = dealer.lat;
            const dealerLon = dealer.lon;
            L.marker([dealerLat, dealerLon])
              .addTo(map)
              .bindPopup("Porsche Dealer");
          });
        } else {
          message.textContent = "No Porsche dealers found nearby.";
        }
      })
      .catch((error) => {
        console.error("Error fetching dealership data:", error);
        message.textContent = "Failed to fetch dealership data.";
      });
  }

  function showMap(latitude, longitude) {
    if (!map) {
      map = L.map("map").setView([latitude, longitude], 13);
      L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
        attribution:
          '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
      }).addTo(map);
    } else {
      map.setView([latitude, longitude], 13);
    }

    L.marker([latitude, longitude])
      .addTo(map)
      .bindPopup("Your Location")
      .openPopup();
  }
});
