// Importing the database from aquariumData.js
import { database } from './aquariumData.js';

/**
 * Generates an HTML representation of the list of locations in the database.
 * @returns {string} The HTML string containing all locations.
 */
export const locationList = () => {
    // Initialize an empty string to store the HTML for locations
    let locationHTML = '';

    // Iterate over each location in the database
    for (const loc of database.locations) {
        // Append the HTML for the current location to the overall HTML string
        locationHTML += `
            <article class="location-card">
                <section class="location-details">
                    <p><strong>Name:</strong> ${loc.name}</p>
                    <p><strong>Country:</strong> ${loc.country}</p>
                    <p><strong>Description:</strong> ${loc.description}</p>
                </section>
            </article>
        `;
    }

    // Return the complete HTML string for all locations
    return locationHTML;
};

