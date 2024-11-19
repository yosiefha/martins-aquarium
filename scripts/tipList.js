// Importing the database from aquariumData.js
import { database } from './aquariumData.js';

/**
 * Generates an HTML representation of the list of care tips in the database.
 * @returns {string} The HTML string containing all tips.
 */
export const tipList = () => {
    // Start the HTML list for tips
    let tipsHTML = `<ul class="tips">`;

    // Iterate over each tip in the database
    for (const tip of database.tips) {
        // Add a list item with topic, text, and createDate for each tip
        tipsHTML += `
            <li class="tip">
                <h3 class="tip__topic">${tip.topic}</h3>
                <p class="tip__text">${tip.text}</p>
                <p class="tip__date">Created on: ${tip.createDate}</p>
            </li>
        `;
    }

    // Close the HTML list
    tipsHTML += "</ul>";

    // Return the complete HTML string for all tips
    return tipsHTML;
};

