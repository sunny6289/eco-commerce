import { Routes, Route } from 'react-router-dom';
import HomeComponent from './Components/Buyer Components/Home/home.component';
import CartComponent from './Routes/Buyer Routes/Cart/CartPage.component';
import MainComponent from './Components/Buyer Components/Main/Main.component';
import WishlistPageComponent from './Routes/Buyer Routes/Wishlist/WishlistPage.component';
import ProductDetailsComponent from './Components/Buyer Components/Product Details Components/ProductDetails.component';

const App = () => {
  return (
    <Routes>
      <Route path='/' element={<HomeComponent />}>
        <Route index element={<MainComponent />} />
        <Route path=":productToDisplayId" element={< ProductDetailsComponent/>} />
        <Route path='/cart' element={<CartComponent />} />
        <Route path='/wishlist/*' element={<WishlistPageComponent/>} />
      </Route>
    </Routes>
  );
}

export default App;
