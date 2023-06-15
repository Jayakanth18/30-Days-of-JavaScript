//Use find to find the first country containing only six letters in the countries array
const countries = ['Finland', 'Sweden', 'Denmark', 'Norway', 'IceLand']
let found=countries.find((n)=>
    n.length==6
)
console.log(found)