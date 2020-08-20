const fs = require('fs')

person = {
    name: 'Sara',
    age: 39
}

const personJson = JSON.stringify(person)

console.log(person);
console.log(personJson);

fs.writeFileSync('person.json', personJson)
const dataBuffer = fs.readFileSync('person.json')
console.log(dataBuffer);

const dataJson = dataBuffer.toString()
console.log(dataJson);


const data = JSON.parse(dataJson)
console.log(data);