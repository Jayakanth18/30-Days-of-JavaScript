let jk=async function(){
    try{
    let link=await fetch('https://jsonplaceholder.typicode.com/todos');
    let final=await link.json()
    console.log(final)
  }
  catch{
    console.log('error')
  }
  }
  jk()