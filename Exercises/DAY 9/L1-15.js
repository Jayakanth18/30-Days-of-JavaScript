// Use filter to filter out only prices with values.
const products = [
    { product: 'banana', price: 3 },
    { product: 'mango', price: 6 },
    { product: 'potato', price: ' ' },
    { product: 'avocado', price: 8 },
    { product: 'coffee', price: 10 },
    { product: 'tea', price: '' },
  ]
  let pricesWithValue=products.filter((n)=>{
    return n.price>=0.01
  })
  console.log(pricesWithValue)