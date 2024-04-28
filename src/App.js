import { Routes, Route } from 'react-router-dom';
import HomeComponent from './Components/Buyer Components/Home/home.component';
import CartComponent from './Routes/Buyer Routes/Cart/CartComponent.component';
import MainComponent from './Components/Buyer Components/Main/Main.component';
import WishlistPageComponent from './Routes/Buyer Routes/Wishlist/WishlistPage.component';
import ProductDetailsContainerComponent from './Components/Buyer Components/Product Details Components/ProductDetailsContainer.component';
import CheckoutContainerComponent from './Components/Buyer Components/Checkout Components/CheckoutContainer.component';
import OrderPageComponent from './Routes/Buyer Routes/Orders page/OrderPage.component';

const App = () => {
  return (
    <Routes>
      <Route path='/' element={<HomeComponent />}>
        <Route index element={<MainComponent />} />
        <Route path=":productToDisplayId" element={<ProductDetailsContainerComponent />} />
        <Route path='/cart' element={<CartComponent />} />
        <Route path='/wishlist' element={<WishlistPageComponent/>} />
        <Route path='/purchase' element={<CheckoutContainerComponent/>} />
        <Route path='/order/*' element={<OrderPageComponent/>} />
      </Route>
    </Routes>
  );
}

export default App;
