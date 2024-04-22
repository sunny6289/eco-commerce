import { Routes, Route } from 'react-router-dom';
import HomeComponent from './Components/Buyer Components/Home/home.component';
import CartComponent from './Routes/Buyer Routes/Cart/CartPage.component';
import MainComponent from './Components/Buyer Components/Main/Main.component';

const App = () => {
  return (
    <Routes>
      <Route path='/' element={<HomeComponent />}>
        <Route index element={<MainComponent />} />
        <Route path='/cart' element={<CartComponent />} />
      </Route>
    </Routes>
  );
}

export default App;
