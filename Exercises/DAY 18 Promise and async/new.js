const one=() =>{
    return 'i am one'
  }
  const two= async () =>{
    setTimeout(() =>{
    return 'i am two'
  },1000);
  };
  
  const three=() =>{
    return 'i am three'
  }
  
  console.log(one())
  console.log(two())
  console.log(three())
