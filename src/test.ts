import {observable} from "mobx";

console.log('it works');

let person = observable({
    firstName: 'MobX',
    lastName: 'Course'
})

console.log('our person', person)

class Person {
    @observable
    firstName: string;

    constructor(name: string) {
        this.firstName = name;
    }
}

const newPerson = new Person('New Name')

console.log('new Person', person)

export {};