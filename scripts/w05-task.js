/* W05: Programming Tasks */

/* Declare and initialize global variables */
// Declare a const variable named templesElement that references the HTML div element that eventually 
// will be populated with temple data.
const templesElement = document.querySelector("#temples");
// Declare a global empty array variable to store a list of temples named templeList.
let templeList = [];

/* async displayTemples Function */
// Declare a function expression using const named displayTemples that uses an arrow function to accept 
// a list of temples as an array argument.
const displayTemples = async (templeList) => {  
    const templeDiv = document.querySelector('#temples');
    // Process each temple in the temple array using a forEach method and do the following for each temple item:
    templeList.forEach(temple => {
        // 1. Create an HTML <article> element (createElement).
        const article = document.createElement('article')
        article.innerHTML = ""
        // 2. Create an HTML <h3> element and add the temple's templeName property to this new element.
        const templeNameH3 = document.createElement('h3')
        templeNameH3.innerHTML = temple.templeName
        templeDiv.append(templeNameH3)
        // 3. Create an HTML <img> element and add the temple's imageUrl property to the src attribute and the 
        // temple's location property to the alt attribute.
        const imageElement = document.createElement('img')
        imageElement.setAttribute("src", temple.imageUrl)
        imageElement.setAttribute("alt", temple.location)
        // 4. Append the <h3> element and the <img> element to the <article> element as children. (appendChild)
        article.appendChild(templeNameH3)
        article.appendChild(imageElement)
        // 5. Append the <article> element to the global templesElement variable declared in Step 2.
        templesElement.appendChild(article)
    });
}


/* async getTemples Function using fetch()*/
// 1. Create another function expression called getTemples. Make it an async anonymous, arrow function.
const getTemples = async () => {
    // 2. In the function, declare a const variable named response that awaits the built-in fetch method 
    // calling the temple data, absolute URL given in Step 2 above.
    const response = await fetch("https://byui-cse.github.io/cse121b-ww-course/resources/temples.json"); 
    // 3. Convert your fetch response into a JavaScript object (.json) and assign the result to the 
    // templeList global array variable you declared in Step 3 above. Make sure the the execution of the 
    // code waits here as well until it finishes. 
    templeList = await response.json();
    // 4. The last statement in the getTemples function calls the displayTemples function and passes it the 
    // list of temples (templeList).
    displayTemples(templeList);
}

getTemples()

/* reset Function */
const reset = function () {
   templesElement.textContent = "";
}

/* sortBy Function */
// 1. Declare a function expression named sortBy.
// 2. The function should accept a argument in a parameter named temples.
const sortBy = (temples) => {
    // 3. In this function, first call the reset function to clear the output.
    reset();
    // 4. Define a variable named filter that obtains the value of the HTML element with the ID of sortBy 
    // (The pull-down menu).
    let filter = document.getElementById('sortBy').value;
    console.log("filter", filter);
    // 5. Use a switch statement that uses the filter value as the selector responding to four (4) cases.
    // 6. For each case, call the displayTemples function using an filter statement that filters the temples 
    // parameter for the four options provided.
    switch (filter) {
        case "all":
            displayTemples(temples);
            break;
        case "utah":
            displayTemples(temples.filter(temple => temple.location.match(/Utah/)));
            break;
        case "notutah":
            displayTemples(temples.filter(temple => !(temple.location.match(/Utah/))));
            break;
        case "older":
            displayTemples(temples.filter(temple => new Date(temple.dedicated) < new Date(1950, 0, 1)));
            break;
    }

}
/* Event Listener */
console.log('TEMPLE data: line 107', templeList );
sortBy(templeList);
document.querySelector("#sortBy").addEventListener("change", () => {sortBy(templeList) });