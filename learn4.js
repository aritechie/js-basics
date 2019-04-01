//constructors
function person(firstName, lastName, dob)
{
    this.firstName = firstName;
    this.lastName = lastName;
    this.dob = dob;
}

//Instantiate object
const person1 = person("Arya", "Gopikrishnan", "10-12-2002");
const person2 = person("Aryan", "Narasimhan", "20-12-2015");

//Adding methods. Ex: To get full name
function person(firstName, lastName, dob)
{
    this.firstName = firstName;
    this.lastName = lastName;
    this.dob = dob;
    this.getFullName = function(){
        return `${this.firstName} ${this.lastName}`;
    }
}

const person1 = new person('Arya', 'Gopikrishnan', '10-12-2002');
const person2 = new person('Aryan', 'Narasimhan', '20-12-2015');

console.log(person1.getFullName());