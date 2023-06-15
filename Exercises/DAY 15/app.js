class Person {
    constructor(firstName, lastName, age, country, city) {
      this.firstName = firstName
      this.lastName = lastName
      this.age = age
      this.country = country
      this.city = city
    }
    flacc(){
        const v=`${this.firstName} ${this.lastName}`
        return v
    }}

    var person1=new Person('jk','r',21,'ind','trl')

    console.log(person1);
    console.log(person1.flacc());