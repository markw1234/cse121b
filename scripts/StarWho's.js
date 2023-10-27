/* StarWho's javaScript */

/* Declare and initialize global variables */
const characterPosition = document.querySelector("#character");
// Declare a global empty array variable to store a list of characters named characterBucket.
let characterBucket = [];

/* async displayCharacters Function */
const displayCharacter = async (characterBucket) => {  
    const characterDiv = document.querySelector('#character');
    console.log("Characters line 19", characterBucket);
    //console.log('@line 20')
    //const arr = Array.from(characterBucket);
    //var as = JSON.parse(characterBucket);
    //console.log('@line 17')
    //let ans = Array.isArray(as);
    //console.log("Output for Number: " + ans);
    //arr.forEach(character => {
    characterBucket.forEach(character => {
        //console.log('@forEach')
        const article = document.createElement('article')
        article.innerHTML = "";
        // 2. Create an HTML <h3> element and add the character's name property to this new element.
        const nameH3 = document.createElement('h3')
        nameH3.innerHTML = character.name
        characterDiv.append(nameH3)
        console.log('line 29', nameH3)
        article.appendChild(nameH3)
        characterPosition.appendChild(article)
    });
}

// function expression called getCharacters
const getCharacters = async () => {
    const response = await fetch('https://swapi.dev/api/people'); 
    characterBucket = await response.json();
    //displayCharacter(characterBucket);
    console.log("Characters line 46", characterBucket)
}
getCharacters()

/* reset Function */
const reset = function () {
    characterPosition.textContent = "";
}

/* sortBy Function */
// This will get user input and decide which character to load in character bucket and 
// and call the display function.
const sortBy = (characters) => 
    reset();
    // This is the value of the user selection
    let filter = document.getElementById('sortBy').value;
    console.log("filter", filter);
    // Switch to decide
    switch (filter) {
        case "all":
            displayCharacter(characters);
            break;
        case "femStrong":
            displayCharacter(characters.filter(character => character.location.match(/Utah/)));
            break;
        case "droid":
            displayCharacter(characters.filter(character => !(character.location.match(/Utah/))));
            break;
        case "olderMale":
            displayCharacter(characters.filter(character => new Date(character.dedicated) < new Date(1950, 0, 1)));
            break;    
        case "youngerMale":
            displayCharacter(characters.filter(character => new Date(character.dedicated) < new Date(1950, 0, 1)));
            break;
    }

}
/* Event Listener */
console.log('character data: line 89', characterBucket );
document.querySelector("#sortBy").addEventListener("change", () => {sortBy(characterBucket) });