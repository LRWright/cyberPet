class Pet {
  constructor(name) {
    this.name = name;
    this.fed = 50;
    this.drank = 50;
  }
}

class Cat extends Pet{
  constructor(name, fed, drank, nap){
    super(name,fed,drank);
    this.nap = 50;
  }
}

class Dog extends Pet{
  constructor(name, fed, drank, walk){
    super(name,fed,drank);
    this.walk = 50;
  }
}

const cat = new Cat("Cat");
const dog = new Dog("Dog");
console.log(cat);
console.log(dog);