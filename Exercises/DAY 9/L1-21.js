const countries = ['Finland', 'Sweden', 'Denmark', 'Norway', 'Iceland']
let allLand=countries.every((n)=>
        n.includes('land')===true
)
console.log(allLand)