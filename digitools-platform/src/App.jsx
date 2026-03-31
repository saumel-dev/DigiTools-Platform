import { Suspense, useState } from 'react'
import './App.css'
import Banner from './Components/Banner/Banner'
import Navbar from './Components/Navbar/Navbar'
import Cart_header from './Components/Products/Cart_header'
import Carts_data from './Components/Products/Carts_data'
import Stats from './Components/Stats/Stats'
import { ToastContainer } from 'react-toastify'
import Cart_section from './Components/Products/Cart_section'
import Get_started from './Components/Get_started_section/Get_started'
import Pricing_section from './Components/Pricing_section/Pricing_section'

function App() {
  const fetchCarts = async () => {
    const res = await fetch('/data.json')
    return res.json()
  }
  const [cartCount, setCartCount] = useState(0);
  const cartsPromise = fetchCarts();
  const [btn, setBtn] = useState('products');
  const [selectedProd, setSelectedProd] = useState([]);
  return (
    <>
      <Navbar selectedProd={selectedProd}></Navbar>
      <Banner></Banner>
      <Stats></Stats>
      <Cart_header btn={btn} setBtn={setBtn} selectedProd={selectedProd}></Cart_header>
      <Suspense>
        {
          btn === 'products' ? <Carts_data selectedProd={selectedProd} setSelectedProd={setSelectedProd} cartCount={cartCount} setCartCount={setCartCount} cartsPromise={cartsPromise}></Carts_data> : <Cart_section selectedProd={selectedProd} setSelectedProd={setSelectedProd} ></Cart_section>
        }
      </Suspense>
      <ToastContainer></ToastContainer>
      <Get_started></Get_started>
      <Pricing_section></Pricing_section>
    </>
  )
}

export default App
