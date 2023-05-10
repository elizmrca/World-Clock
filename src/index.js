
function updateLosAngelesTime() {

// For Los Angeles

let losAngelesElement = document.querySelector("#los-angeles");
let losAngelesDateElement = losAngelesElement.querySelector(".date");
let losAngelesTimeElement = losAngelesElement.querySelector(".time");
let losAngelesTime = moment().tz("America/Los Angeles");
losAngelesDateElement.innerHTML = losAngelesTime.format("MMMM Do YYYY");
losAngelesTimeElement.innerHTML = `${losAngelesTime.format('h:mm:ss')} <small>${losAngelesTime.format('A')}</small>`;
//losAngelesDateElement.innerHTML = moment().tz("America/Los Angeles").format("MMMM Do YYYY");
//losAngelesDateElement.innerHTML = moment().tz("America/Los Angeles").format("MMMM Do YYYY");
//losAngelesTimeElement.innerHTML = `${moment().format('hh:mm:ss')}<small>${moment().tz("America/Los Angeles").format('A')}</small>`;
losAngelesTimeElement.innerHTML = `${losAngelesTime.tz("America/Los Angeles").format("hh:mm:ss [<small>]A[</small>]")}`;


// For Paris
let parisElement = document.querySelector("#paris");
let parisDateElement = parisElement.querySelector(".date");
let parisTimeElement = parisElement.querySelector(".time");
let parisTime = moment().tz("Europe/Paris");
parisDateElement.innerHTML = parisTime.format("MMMM Do YYYY");
parisTimeElement.innerHTML = `${parisTime.format('h:mm:ss')}
<small>${parisTime.format('A')}</small>`;
parisTimeElement.innerHTML = `${parisTime.tz("America/Los Angeles").format("hh:mm:ss [<small>]A[</small>]")}`;

}

setInterval(updateLosAngelesTime, 1000);
