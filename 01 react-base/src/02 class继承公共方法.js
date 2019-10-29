class Person {
  constructor(name, age) {
    this.name = name
    this.age = age
  }

  sayHi(){
    console.log("Hi")
  }
}

class American extends Person{
  constructor(name, age){
    super(name, age)
  }
}

const a1 = new American("Jack", 88)
console.log(a1)
a1.sayHi()


class Chinese extends Person{
  constructor(name, age, IDNumber){
    super(name, age)
    this.IDNumber = IDNumber 
  }
}

const a2 = new Chinese("小米", 77, '620102******')
console.log(a2)