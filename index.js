// Your code here

// Writing a method that uses instance data and parameter data

// class Cat
class Cat {
    constructor(name, sex) {
        this.name = name;
        this.sex = sex;
    }

    // create a method
    speak(){
        return `${this.name} says meow!`
    }
}

// class Dog
class Dog {
    constructor(name, sex) {
        this.name = name;
        this.sex = sex;
    }

    //create a method
    speak(){
        return `${this.name} says woof!`
    }
}

// class Bird
class Bird {
    constructor(name, sex) {
        this.name = name;
        this.sex = sex;
    }

    // create a method
    speak(){
        if (`${this.sex}` === 'male'){
            return `It's me! ${this.name}, the parrot!`
        } else {
            return `${this.name} says squawk!`
        }
    }
}