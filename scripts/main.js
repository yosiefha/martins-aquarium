import { fishList } from './fishList.js';
import { tipList } from './tipList.js'
import { locationList } from './locationList.js'

// Generate the fish list
const fishHTML = fishList()

// Generate the care tips
const tipHTML = tipList()

// Generate the location list
const locationHTML = locationList()

// Render each HTML string to the correct DOM element
const fishListElement = document.getElementById('fishList');
    
if (fishListElement) {
    fishListElement.innerHTML = fishHTML;
} else {
    console.error('Could not find element with id "fishList"');
}

// Generate the HTML for the care tips and inject it into the DOM
const tipListElement = document.getElementById('tipList');
if (tipListElement) {
    tipListElement.innerHTML = tipList();
} else {
    console.error('Could not find the element with id "tipList"');
}



// Generate the HTML for the locations and inject it into the DOM
const locationListElement = document.getElementById('locationList');
if (locationListElement) {
    locationListElement.innerHTML = locationList();
} else {
    console.error('Could not find the element with id "locationList"');
}

