//Started On 20th July 2023

 //End Of Image Slider
 
 //Handling Animations
 const section = document.querySelector('section');
 const logo = document.getElementById('logo');
 const sectionOfHome = document.getElementById('home');
 const MC = document.getElementById('mainContent');

 function animateSection(){
   sectionOfHome.style.opacity = "1";
 }
 function animateMC(){
   MC.style.opacity = '1';
   MC.style.transform = 'translateX(0)'
 }
 function animateSections(){
   section.style.transform = 'translateX(0)'
 }
 function animateLogo(){
   logo.style.opacity = 0.98;
 }
 setTimeout(animateMC, 4000);
 setTimeout(animateLogo, 2300)
 setTimeout(animateSections, 2800)
 setTimeout(animateSection, 2800);
 
const apiUrl = 'https://api.wheretheiss.at/v1/satellites/25544';

async function fetchISSData() {
  try {
    const response = await fetch(apiUrl);
    if (!response.ok) {
      throw new Error('Failed to fetch ISS data.');
    }
    const data = await response.json();
    displayISSData(data)
  } catch (error) {
    console.error(error);
    // Display an error message on your website if the API call fails
  }
}

function displayISSData(data) {
  const lat = document.getElementById('lat');
  const lon = document.getElementById('lon');
  const vel = document.getElementById('vel');
  const name = document.getElementById('name');
  const alt = document.getElementById('alt');
  name.innerHTML = `${data.name} <br> (International Space Station)`;
  lat.innerText = `${data.latitude}`;
  lon.innerText = `${data.longitude}`;
  vel.innerText = `${data.velocity}`;
  alt.innerText = `${data.altitude}`;
}
fetchISSData();
window.addEventListener('scroll', function(){
  logo.style.background = '#111'

})
window.addEventListener('DOMContentLoaded', ()=> {
  const intro = document.querySelector('#intro');
  const introHeader = document.querySelector('#intro-header');
  const logoSpan = document.querySelectorAll('#log');
  setTimeout(()=>{
    logoSpan.forEach((span, idx)=>{
      setTimeout(()=>{
        span.classList.add('active');
      },(idx + 1) * 450)
    })
  setTimeout(()=>{
    logoSpan.forEach((span, idx) => {
      setTimeout(() => {
        span.classList.remove('active');
        span.classList.add('fade');
      }, (idx + 10) * 50)
    })
   },2000);
   setTimeout(()=>{
     intro.style.transform = 'translateY(-100vh)';
   },2300)
  })
  // API URL
const url = "http://api.open-notify.org/astros.json";
const spaceNames = document.getElementById('names');
const nop = document.getElementById('nop')

// Function to fetch data from the API
async function getSpacePeople() {
  try {
    const response = await fetch(url);
    
    if (!response.ok) {
      throw new Error("Failed to fetch data");
    }
    
    const data = await response.json();
    
    // Print the number of people in space
    nop.innerHTML = `${data.number}`;
    data.people.forEach(person => {
      spaceNames.innerHTML += `<li>${person.name} , <b>In : ${person.craft}</b><br> </li>`;
    });
  } catch (error) {
    console.error("Error:", error.message);
  }
}
getSpacePeople();
 var map = new ol.Map({
  target: 'map',
  view: new ol.View({
  center: [0, 0],
  zoom: 2,
  maxZoom: 99,
 }),
   interactions: ol.interaction.defaults({ doubleClickZoom: false, dragPan: true, mouseWheelZoom: false }),
   controls: [],
   layers: [
   new ol.layer.Tile({
   source: new ol.source.OSM({
   attributions: [],
  }),
 }),
 ],
 });
var issIcon = new ol.style.Style({
 image: new ol.style.Icon({
 src: 'iss_icon.png',
 scale: 0.17,
 }),
});
 var issFeature = new ol.Feature({
  geometry: new ol.geom.Point(ol.proj.fromLonLat([0, 0])),
 });
 issFeature.setStyle(issIcon);
 var issLayer = new ol.layer.Vector({
  source: new ol.source.Vector({
  features: [issFeature],
  }),
 });
  map.addLayer(issLayer);
  function getISSLocation() {
   var xhr = new XMLHttpRequest();
   xhr.open('GET', 'http://api.open-notify.org/iss-now.json', true);
   xhr.onreadystatechange = function() {
    if (xhr.readyState === 4 && xhr.status === 200) {
     var data = JSON.parse(xhr.responseText);
     var latitude = parseFloat(data.iss_position.latitude);
     var longitude = parseFloat(data.iss_position.longitude);
     updateISSMarker(latitude, longitude);
    }
   };
   xhr.send();
  }
  function updateISSMarker(latitude, longitude) {
    var coord = ol.proj.fromLonLat([longitude, latitude]);
    issFeature.getGeometry().setCoordinates(coord);
  }
  function updateISSLocation() {
    getISSLocation();
    setTimeout(updateISSLocation, 5000); // Update location every 5 seconds
  }
  updateISSLocation();
  // Function to focus on the ISS icon
  function focusOnISS() {
    var view = map.getView();
    var issCoords = issFeature.getGeometry().getCoordinates();
    view.animate({
    center: issCoords,
    duration: 500,
    zoom: 3,
   });
  }
  document.getElementById('map').addEventListener('click', function () {
   focusOnISS();
  });
  const menu = document.querySelector('#menu');
  const menuBar = document.querySelector('#menuBar');
  const closeBtn = document.getElementById('closeBtn');
  menu.addEventListener('click', ()=>{
    menuBar.classList.add('active');
    menu.style.opacity = 0;
  })
  closeBtn.addEventListener('click', ()=>{
    menuBar.classList.remove('active');
    menu.style.opacity = 1;
  })
  window.addEventListener('scroll', () =>{
    menuBar.classList.remove('active');
    menu.style.opacity = 1;
  })
  //Welcome to Picture Of the Day
const apiKeys = 'BKTiKbvUtEKMX5LlcxQt20yBy7deHGJ9PoblD54m';
const apiUrls = `https://api.nasa.gov/planetary/apod?api_key=${apiKeys}`;
const img = document.getElementById('img');
fetch(apiUrls)
  .then(response => response.json())
  .then(data => {
    const imageUrl = data.url;
    img.src = imageUrl;
    img.addEventListener('click', ()=>{
      img.download= imageUrl;
    })
    // Now you can use the imageUrl as you need (e.g., display it on a webpage).
  })
  .catch(error => console.error("Error:", error));
});
//Paused at 25th july 2023
//Next : Dark mode