fetch('https://jsonplaceholder.typicode.com/todos')
      .then((tojson) => tojson.json())
      .then((data) => console.log(data))
      .catch(() => console.log('failed to load api'))