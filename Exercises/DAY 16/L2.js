const student = {
    firstName:'Asabeneh',
    lastName:'Yetayehe',
    age:250,
    isMarried:true,
    skills:['HTML', 'CSS', 'JS', 'React','Node', 'Python', ]
  }
//---------------------------Using a Filter Array with JSON.stringify------------
  let newStudent=JSON.stringify(student,['firstName','lastName','skills',2])

  console.log(newStudent);