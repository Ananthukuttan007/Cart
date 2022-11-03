import { useState } from 'react';
import './App.css';
import LeftBox from './components/LeftBox';
import RightBox from './components/RightBox';
import Data from './object'

function App() {
  const [quantity, setQuantity] = useState({
    product1: 0,
    product2: 0,
    product3: 0
  })
  const [total, setTotal] = useState(0);
  const Products = Data
  return (
    <>
      <div className='container'>
        <LeftBox Products={Products} quantity={quantity} setQuantity={setQuantity} total={total} setTotal={setTotal} />
        <RightBox Products={Products} quantity={quantity} total={total} />
      </div>
    </>
  );
}

export default App;
