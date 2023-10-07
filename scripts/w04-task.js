/* LESSON 3 - Programming Tasks */

/* Profile Object  */
let myProfile = {
    name: "Mark Wright",
    photo: {
        path: "images/PXL_20230914_021512523.MP.jpg",
        name: "myPhoto"},

/* Favorite Foods List*/
    favoriteFoods: ['Rice', 'Beans', 'Grapes'],
    hobbies: ['Biking', 'Skateboarding', 'Running'],
    placesLived: []
};

/* Populate Profile Object with placesLive objects */
myProfile.placesLived.push({place: 'Phoenix, AZ', length: '5 years'});
myProfile.placesLived.push({place: 'Hyder, AZ', length: '10 years'});
myProfile.placesLived.push({place: 'Morristown, NJ', length: '2 years'});

/* DOM Manipulation - Output */

/* Name */
document.querySelector('#name').textContent = myProfile.name;

/* Photo with attributes */
document.querySelector('#photo').src = myProfile.photo.path;

/*favorite food loop*/
myProfile.favoriteFoods.forEach(food => {
    let li = document.createElement('li');
    li.textContent = food;
    document.querySelector('#favorite-foods').appendChild(li);
})

/* Hobbies List */
myProfile.hobbies.forEach(hobby => {
    let li = document.createElement('li');
    li.textContent = hobby;
    document.querySelector('#hobbies').appendChild(li);
})

/* Places Lived DataList */
myProfile.placesLived.forEach(place => {
    let dt = document.createElement('dt');
    dt.textContent = place.place;
    document.querySelector('#places-lived').appendChild(dt);

    let dd = document.createElement('dd');
    dd.textContent = place.length;
    document.querySelector('#places-lived').appendChild(dd);
})







