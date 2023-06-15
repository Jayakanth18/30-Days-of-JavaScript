let isMarried = true
const student = {
  firstName:'Asabeneh',
  lastName:'Yetayehe',
  age:250,
  isMarried:true,
  skills:['HTML', 'CSS', 'JS', 'React','Node', 'Python', ]
}

let newIsMarried=JSON.stringify(isMarried)

let newStudent=JSON.stringify(student)

console.log(newIsMarried);

console.log(student);
console.log(newStudent);