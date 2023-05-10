
function updateTime() {

// For Los Angeles

let losAngelesElement = document.querySelector("#los-angeles");
if (losAngelesElement){
let losAngelesDateElement = losAngelesElement.querySelector(".date");
let losAngelesTimeElement = losAngelesElement.querySelector(".time");
let losAngelesTime = moment().tz("America/Los Angeles");
losAngelesDateElement.innerHTML = losAngelesTime.format("MMMM Do YYYY");
losAngelesTimeElement.innerHTML = `${losAngelesTime.format('h:mm:ss')} <small>${losAngelesTime.format('A')}</small>`;
//losAngelesDateElement.innerHTML = moment().tz("America/Los Angeles").format("MMMM Do YYYY");
//losAngelesDateElement.innerHTML = moment().tz("America/Los Angeles").format("MMMM Do YYYY");
//losAngelesTimeElement.innerHTML = `${moment().format('hh:mm:ss')}<small>${moment().tz("America/Los Angeles").format('A')}</small>`;
losAngelesTimeElement.innerHTML = `${losAngelesTime.tz("America/Los Angeles").format("hh:mm:ss [<small>]A[</small>]")}`;
}


// For Paris
    let parisElement = document.querySelector("#paris");
    if (parisElement){
    let parisDateElement = parisElement.querySelector(".date");
    let parisTimeElement = parisElement.querySelector(".time");
    let parisTime = moment().tz("Europe/Paris");
    parisDateElement.innerHTML = parisTime.format("MMMM Do YYYY");
    //parisTimeElement.innerHTML = `${parisTime.format('h:mm:ss')} <small>${parisTime.format('A')}</small>`;
    parisTimeElement.innerHTML = `${parisTime.tz("Europe/Paris").format("hh:mm:ss [<small>]A[</small>]")}`;
    }

}

function updateCity(event){
    //target the answer/value from that select feature
    let cityTimeZone = event.target.value;
    if (cityTimeZone === "current"){
        cityTimeZone = moment.tz.guess();    
    }
    //you split it then get the first array
    let cityName = cityTimeZone.replace("_"," ").split("/")[1];
    //console.log(cityTimeZone);
    let cityTime = moment().tz(cityTimeZone);
    //console.log(cityTime.format("MMMM Do YYYY"));
    let citiesElement = document.querySelector("#cities");
    citiesElement.innerHTML =
    `<div class="city">
         <div>
            <h2>${cityName}</h2>
            <div class="date">
            ${cityTime.format("MMMM Do YYYY")}
            </div>
        </div>
            <div class="time">
            ${cityTime.format("hh:mm:ss")}
            <small>${cityTime.format("A")}</small>
            </div>
        </div>
    </div>
    <div class="allcities" style="text-align: center;">
    <a href="/">ALL CITIES</a>
</div>

    `;

}

updateTime();
setInterval(updateTime, 1000);


//connect to HTML document by calling out the select feauture
let citiesSelectElement = document.querySelector("#city");
//then create a function
citiesSelectElement.addEventListener("change", updateCity);