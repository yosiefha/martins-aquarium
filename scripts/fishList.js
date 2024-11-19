import { database } from './aquariumData.js';

export const mostHolyFish = () => {
    // 3, 6, 9, 12, etc... fish
    const holyFish = []

    for (const fish of database.fish) {
        if(fish.length % 3 === 0){
            holyFish.push(fish)

        }

    }

    return holyFish
}

export const soldierFish = () => {
    // 5, 10, 15, 20, 25, etc... fish
    const swordfish = []
    for (const fish of database.fish) {
        if(fish.length % 5 === 0){
            swordfish.push(fish)

        }

    }
    return swordfish
}


export const regularFish = () => {
    // Any fish not a multiple of 3 or 5

    const regularFish = [];

    for (const fish of database.fish) {
        // Check if the fish length is not divisible by 3 and not divisible by 5
        if (fish.length % 5 !== 0 && fish.length % 3 !== 0) {
            regularFish.push(fish);
        }
    }
    
    return regularFish;
}
const allFish = [
    ...mostHolyFish(),
    ...soldierFish(),
    ...regularFish()
];
export const fishList = () => {
    let fishHTML = '';
    // Loop through each fish in the combined allFish array
    for (const fish of allFish) {
        fishHTML += `
            <article class="fish">
                <img src="${fish.image}" alt="${fish.name} image" class="fish__image">
                <div class="fish__details">
                    <h2 class="fish__name">${fish.name}</h2>
                    <p class="fish__species">Species: ${fish.species}</p>
                    <p class="fish__length">Length: ${fish.length} inches</p>
                    <p class="fish__diet">Diet: ${fish.diet}</p>
                    <p class="fish__location">Location: ${fish.location}</p>
                </div>
            </article>
        `;
    }
    return fishHTML;
};


