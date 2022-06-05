import { BrowserRouter, Routes, Route } from 'react-router-dom';
// import Cart from "./Pages/Cart/Cart";
// import Home from "./Pages/Home/Home";
// import Login from "./Pages/Login/Login";
// import ProductList from "./Pages/ProductList/ProductList";
// import Signup from "./Pages/Signup/Signup";
// import SingleProduct from "./Pages/SingleProduct/SingleProduct";
import Payment from './Pages/Payment/Payment';
import SuccessPayment from './Pages/SuccessPayment/SuccessPayment';


const App = () => {
  return (
    <>
      {/* <Home /> */}
      {/* <ProductList /> */}
      {/* <SingleProduct /> */}
      {/* <Signup /> */}
      {/* <Login /> */}
      {/* <Cart /> */}
      <BrowserRouter>
        <Routes>
          <Route path='/pay' element={<Payment />} />
          <Route path='/success' element={<SuccessPayment />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
