
import { BrowserRouter, Route, Routes } from 'react-router'
import Cart from './Components/Cart/Cart'
import Nav from './Components/Nav/Nav'
import { CartContextProvider } from './Context/CartContext'
import NavResponsive from './Components/Nav/NavResponsive'
import Warning from './Components/Warning/Warning'
import Footer from './Components/Footer/Footer'
import Home from './Components/Home/Home'
import ProductsPage from './Components/Products/ProductsPage'



function App() {
  return (
    <CartContextProvider>
      <Warning></Warning>
      <BrowserRouter>
      <Nav></Nav>
      <NavResponsive></NavResponsive>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/cart" element={<Cart></Cart>}></Route>
        <Route path='/ProductsPage' element={<ProductsPage></ProductsPage>}></Route>   
      </Routes>
      <Footer></Footer>
      </BrowserRouter>
     </CartContextProvider>
     
  )
}

export default App
