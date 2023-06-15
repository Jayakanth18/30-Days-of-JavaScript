function person(){
    let name='jk'
    let age=21
    function yearOfBorn(){
        let now=new Date()
        let y=now.getFullYear()
        y -= age
        return y
    }
    return yearOfBorn()
}

console.log(person());