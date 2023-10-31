"use strict";
const persons = [
    {
        type: "admin",
        name: "Иван Петров",
        age: 27,
        role: "Администратор",
    },
    {
        type: "user",
        name: "Марат Aляуддинов",
        age: 20,
        group: "музыкант",
    },
    {
        type: "admin",
        name: "Марат Aляуддинов",
        age: 20,
        role: "Администратор",
    },
];
const isAdmin = (person) => {
    return person.type === "admin";
};
const isUser = (person) => {
    return person.type === "user";
};
const logPerson = (person) => {
    let information = "";
    if (isAdmin(person)) {
        information = person.role;
    }
    if (isUser(person)) {
        information = person.group;
    }
    console.log(` - ${person.name}, ${person.age}, ${information}`);
};
console.log("Admins:");
persons.filter(isAdmin).forEach(logPerson);
console.log();
console.log("Users:");
persons.filter(isUser).forEach(logPerson);
