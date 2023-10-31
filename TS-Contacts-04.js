var persons = [
    {
        type: 'admin',
        name: 'Иван Петров',
        age: 27,
        role: 'Администратор',
    },
    {
        type: 'user',
        name: 'Марат Aляуддинов',
        age: 20,
        group: 'музыкант',
    },
    {
        type: 'admin',
        name: 'Марат Aляуддинов',
        age: 20,
        role: 'Администратор'
    }
];
var isAdmin = function (person) {
    return person.type === 'admin';
};
var isUser = function (person) {
    return person.type === 'user';
};
var logPerson = function (person) {
    var information = '';
    if (isAdmin(person)) {
        information = person.role;
    }
    if (isUser(person)) {
        information = person.group;
    }
    console.log(" - ".concat(person.name, ", ").concat(person.age, ", ").concat(information));
};
console.log('Admins:');
persons.filter(isAdmin).forEach(logPerson);
console.log();
console.log('Users:');
persons.filter(isUser).forEach(logPerson);
