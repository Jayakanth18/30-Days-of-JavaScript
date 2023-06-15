//Find the total price of products by chaining two or more array iterators(eg. arr.map(callback).filter(callback).reduce(callback)

const products = [
    { product: 'banana', price: 3 },
    { product: 'mango', price: 6 },
    { product: 'potato', price: ' ' },
    { product: 'avocado', price: 8 },
    { product: 'coffee', price: 10 },
    { product: 'tea', price: '' },
  ]
  // filtering the amount that has value omiting potato and tea
  let total=products.filter((n)=>
  n.price>0.1)
  // only taking price
    .map((n)=>n.price)
  // adding all prices
    .reduce((a,b)=> a+b,0)
  console.log(total);