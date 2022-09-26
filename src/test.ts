import {action, autorun, observable, runInAction} from "mobx";

class Person {
    @observable firstName: string = '';
    @observable lastName: string = '';
    @observable age: number = 15;
    @observable isAlive: boolean = true;

    constructor(name: string, lastName: string) {
        this.firstName = name;
        this.lastName = lastName;
    }

    @action
    updateFullName(name: string, lastName: string){
        this.firstName = name;
        this.lastName = lastName
    }

    @action
    setAge(age: number) {
        this.age = age
    }
}

const newPerson = new Person('Matt', 'Damon')

// newPerson.setAge(50)

// autorun(async () => {
//     console.log(`Person Name Is: ${newPerson.firstName} ${newPerson.lastName} (${newPerson.age})`);
//     console.log(newPerson)
// });

runInAction(() => {
    newPerson.firstName = 'Will';
    newPerson.lastName = 'Hunting'
    newPerson.isAlive = false;
})

newPerson.setAge(30)
// newPerson.updateFullName('Will', 'Hunting')

// console.log(newPerson)

export {};