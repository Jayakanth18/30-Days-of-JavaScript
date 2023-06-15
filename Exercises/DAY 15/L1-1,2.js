class Animal{
    constructor(name,age,color,legs){
        this.name=name
        this.age=age
        this.color=color
        this.legs=legs
    }
    get myName() {
      return  `My Name is ${this.name}`
    }
}

// let dog=new Animal('jimmy',2,'brown','short')
// let cat=new Animal('polar',1,'black','short')
// console.log(dog);
// console.log(cat);

class Dog extends Animal{
        saySomething(){
            console.log('i am child of Animal class');
        }
}


class Cat extends Animal{
    saySomething(){
        console.log('i am child of Animal class');
    }
}




let cat1=new Cat('tommy')

console.log(cat1.myName);
