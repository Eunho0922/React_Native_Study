// 객체 선언
let person = {
    name: 'Alice',
    age: 25,
    greet: function() {
        console.log(`Hello, my name is ${this.name}`);
    },
    greetAnother() {
        console.log(`Hello, my name is ${this.name}`);
    },
};

// 프로퍼티 접근 및 메서드 호출
console.log(person.name);
person.greet();
person.greetAnother();

// 동적 프로퍼티 추가, 변경, 삭제
person.gender = 'female';
console.log(person.gender);
person.age = 30;
console.log(person.age);
delete person.gender;
console.log(person.gender);

// 객체 구조 분해 할당
let {name, age} = person;
console.log(name);
console.log(age);

// 다른 변수 이름으로 할당
let {name: personName, age: personAge} = person;
console.log(personName);
console.log(personAge);

// 객체 메서드
let keys = Object.keys(person);
let values = Object.values(person);
let entires = Object.entries(person);

let additionalInfo = { country: 'USA' };
let updatedPerson = Object.assign({}, person, additionalInfo);

Object.freeze(person);
person.age = 35;
console.log(person.age);

let sealedPerson = { name: 'Bob', age: 40 };
Object.seal(sealedPerson)
sealedPerson.age = 45;
sealedPerson.gender = 'male';
console.log(sealedPerson.age);
console.log(sealedPerson.gender);
