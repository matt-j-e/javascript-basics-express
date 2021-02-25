const createPerson = (name, age) => {
  return {name: name, age: age};
};

const getName = object => {
  return object.name;
};

const getProperty = (property, object) => {
  return object[property];
};

const hasProperty = (property, object) => {
  return object.hasOwnProperty(property);
};

const isOver65 = person => {
  return person.age > 65;
};

const getAges = people => {
  const ages = [];
  people.map((person) => ages.push(person.age));
  return ages;
};

const findByName = (name, people) => {
  return people.find(person => person.name === name);
};

const findHondas = cars => {
  return cars.filter((car) => car.manufacturer == "Honda");
};

const averageAge = people => {
  let total = 0;
  people.map((person) => total += person.age);
  return total/people.length;
};

const createTalkingPerson = (name, age) => {
  const person = {
    name: name,
    age: age,
    introduce: function(otherPerson) {
      return (`Hi ${otherPerson}, my name is ${this.name} and I am ${this.age}!`);
    }
  }
  return person;
};

module.exports = {
  createPerson,
  getName,
  getProperty,
  hasProperty,
  isOver65,
  getAges,
  findByName,
  findHondas,
  averageAge,
  createTalkingPerson
};
