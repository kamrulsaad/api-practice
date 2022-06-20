import { useEffect, useState } from 'react';
import './App.css';

function App() {

  const [products, setProducts] = useState([])
  useEffect(() => {
    fetch('https://fakestoreapi.com/products')
      .then(res => res.json())
      .then(data => setProducts(data))
  }, [])

  console.log(products);

  return (
    <div className="App">
      {
        products.map(pd => <div key={pd.id} className='card'>
          <img src={pd.image} alt={pd.title} />
          <h1>{pd.title.slice(0, 20)}</h1>
          <p>Price: {pd.price}</p>
          <p>Rating: {pd.rating.rate}/5 by {pd.rating.count} people</p>
          <p>Category: {pd.category}</p>
          <p>Description: {pd.description.slice(0, 30)}</p>
        </div>)
      }
    </div>
  );
}

export default App;
