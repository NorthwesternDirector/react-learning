class Person {
  constructor(name, age) {
    this.name = name
    this.age = age
  }
}

class American extends Person{
  
}

const a1 = new American("Jack", 88)
console.log(a1)


class Chinese extends Person{
  
}

const a2 = new Chinese("小米", 77)
console.log(a2)