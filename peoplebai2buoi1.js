const people = [{
    id: 1,
    first_name: "Cynthy",
    last_name: "Blunsden",
    email: "cblunsden0@tuttocitta.it",
    gender: "Female"
}, {
    id: 2,
    first_name: "Anna-diana",
    last_name: "Whitlock",
    email: "awhitlock1@go.com",
    gender: "Female"
}, {
    id: 3,
    first_name: "Aurora",
    last_name: "Lawrance",
    email: "alawrance2@google.com.hk",
    gender: "Female"
}, {
    id: 4,
    first_name: "Netti",
    last_name: "McDonnell",
    email: "nmcdonnell3@tmall.com",
    gender: "Female"
}, {
    id: 5,
    first_name: "Elfie",
    last_name: "McGinnis",
    email: "emcginnis4@un.org",
    gender: "Female"
}, {
    id: 6,
    first_name: "Eugine",
    last_name: "Wyndham",
    email: "ewyndham5@tinyurl.com",
    gender: "Genderfluid"
}, {
    id: 7,
    first_name: "Franky",
    last_name: "Reiner",
    email: "freiner6@gov.uk",
    gender: "Polygender"
}, {
    id: 8,
    first_name: "Amity",
    last_name: "Luparto",
    email: "aluparto7@eventbrite.com",
    gender: "Female"
}, {
    id: 9,
    first_name: "Vivien",
    last_name: "Tolle",
    email: "vtolle8@mapquest.com",
    gender: "Female"
}, {
    id: 10,
    first_name: "Arnoldo",
    last_name: "Deval",
    email: "adeval9@google.fr",
    gender: "Male"
}]

const people1 = people.map((i) =>
{
    console.log(i.first_name);
})

const people2 = people.map((i) =>
{
    console.log("full name: " + i.first_name + " " + i.last_name);
    console.log(i.gender);
})

const people3 = people.filter((i) =>
{
    
    return i.id > 5;
})
console.log(people3);

const people4 = people.filter((i) =>
{
    return (i.gender == "Male") && (i.id > 5);
    
})
console.log(people4);

const people5 = people.find((i) =>
{
   return ( i.id > 9);
})
console.log(people5);