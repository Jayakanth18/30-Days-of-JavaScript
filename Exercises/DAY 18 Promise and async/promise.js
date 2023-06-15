
var promise=new Promise((resolve,reject) => {
  let number = 5 
  if(number == 5 ){
    resolve ('passed')
    } else{
    reject ('failed')}
  })
  
  promise.then((pass) =>{
    console.log(pass)
  }).catch((fail) =>{
    console.log(fail)
  })