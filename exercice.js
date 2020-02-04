function ajax() {
   let xhttp = new XMLHttpRequest();
   xhttp.onreadystatechange = function () {

       if (this.readyState === 4 && this.status === 200) {
           document.getElementById("inputSearch").value = this.responseText;
           let meteo = this.responseText;

           let temps = JSON.parse(meteo);
           document.getElementById("inputSearch").value = temps.name;

           document.getElementById("degré").innerHTML = temps.main.temp;
           document.getElementById("tempMax").innerHTML = temps.main.temp_max;
           document.getElementById("tempMin").innerHTML = temps.main.temp_min;
           document.getElementById("presAtmo").innerHTML = temps.main.pressure;
           document.getElementById("vitesseVent").innerHTML = temps.wind.speed;
           document.getElementById("humidite").innerHTML = temps.main.humidity;
           document.getElementById("longitude").innerHTML = temps.coord.lon;
           document.getElementById("latitude").innerHTML = temps.coord.lat;
       }
   };

   let ville = document.getElementById("inputSearch").value;
   xhttp.open("GET", "script.php?ville="+ville, true);
   xhttp.send();

};

document.getElementById("inputSubmit").addEventListener("click", ajax);