const person = { found: 2, message: "Found 2 persons", result: [ { name: { common: "John", fullName: ["John", "Doe"] }, age: 32, isMale: false, address: { street: "13/A St Joseph", house: 10, }, }, { name: { common: "Humayoun", fullName: ["Humayoun", "Kabir"] }, age: 33, isMale: false, address: { street: "13/A St Lucia", house: 11, }, }, ] };


console.log(person);




document.getElementById('person-one').innerText = `Name : ` + (person.result[0].name.fullName[0] + ' ' + person.result[0].name.fullName[1]);

document.getElementById('person-two').innerText = `Name : ` + (person.result[1].name.fullName[0] + ' ' + person.result[0].name.fullName[1]);



document.getElementById('person-age-one').innerText = `Age : ` + person.result[0].age;
document.getElementById('person-age-two').innerText = `Age : ` + person.result[0].age;


document.getElementById('person-one-address').innerText = `Address : ` + person.result[0].address.street;
document.getElementById('person-two-address').innerText = `Address : ` + person.result[1].address.street;