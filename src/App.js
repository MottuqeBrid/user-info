import { useEffect, useState } from 'react';
import './App.css';
import User from './components/User/User';
import Cart from './components/Cart/Cart';
import userData from './data/user-data.json';

function App() {
  const [user, setUser] = useState(userData);
  const [cart, setCart] = useState([]);
  // console.log(user)
  const addEventHandler = (user) => {
    const newCart = [...cart, user];
    setCart(newCart);
  }
  let total = 0;
  for (let i = 0; i < cart.length; i++) {
    const user = cart[i];
    total = total + user.salary;
  }
  // console.log(total)
  return (
    <div className="App">
      <h1 style={{ textAlign: 'center', fontSize: '50px' }}>User Information</h1>
      <Cart totalSalary={total}></Cart>
      {
        user.map(usr => <User key={usr.id} user={usr} addEventHandler={addEventHandler}></User>)
      }
    </div>
  );
}

export default App;
