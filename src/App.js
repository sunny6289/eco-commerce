import { Routes, Route } from 'react-router-dom';
import HomeComponent from './Components/Buyer Components/Home/home.component';
import CartComponent from './Routes/Buyer Routes/Cart/CartPage.component';
import MainComponent from './Components/Buyer Components/Main/Main.component';
import WishlistPageComponent from './Routes/Buyer Routes/Wishlist/WishlistPage.component';

const App = () => {
  return (
    <Routes>
      <Route path='/' element={<HomeComponent />}>
        <Route index element={<MainComponent />} />
        <Route path='/cart' element={<CartComponent />} />
        <Route path='/wishlist' element={<WishlistPageComponent/>} />
      </Route>
    </Routes>
  );
}

export default App;
