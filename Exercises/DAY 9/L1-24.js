// Use findIndex to find the position of the first country containing only six letters in the countries array
const countries = ['Finland', 'Sweden', 'Denmark', 'Norway', 'IceLand']
let foundArray=countries.findIndex((n)=>
        n.length===6
)
console.log(foundArray)