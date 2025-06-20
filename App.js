
import React, { useState } from 'react';
function App() {
  const [orderPlaced, setOrderPlaced] = useState(false);
  const placeOrder = () => {
    alert("Order placed! PDF invoice will be generated.");
    setOrderPlaced(true);
  };
  return (
    <div style={{ padding: 20 }}>
      <h1>TrendHustlers</h1>
      <button onClick={placeOrder} style={{ padding: 10, backgroundColor: 'black', color: 'white' }}>
        Place Order (Cash on Delivery)
      </button>
      {orderPlaced && <p>PDF Invoice: Coming Soon...</p>}
    </div>
  );
}
export default App;
