const countryEl = document.getElementById("country");
if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(showPosition);
  } else {
    console.log("Geolocation is not supported by this browser.");
  }
  
  function showPosition(position) {
    const latitude = position.coords.latitude;
    const longitude = position.coords.longitude;
    const url = `https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=${latitude}&longitude=${longitude}&localityLanguage=en`;
    
    fetch(url)
      .then(response => response.json())
      .then(data => {
        const countryName = data.countryName;
        countryEl.innerText = countryName;
        console.log(`Your current country is ${countryName}.`);
      })
      .catch(error => console.log(error));
  }