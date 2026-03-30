import { Suspense } from 'react'
import './App.css'
import Banner from './Components/Banner/Banner'
import Navbar from './Components/Navbar/Navbar'
import Cart_header from './Components/Products/Cart_header'
import Carts_data from './Components/Products/Carts_data'
import Stats from './Components/Stats/Stats'

function App() {
  const fetchCarts = async () => {
    const res = await fetch('/data.json')
    return res.json()
  }
  const cartsPromise = fetchCarts();
  return (
    <>
      <Navbar></Navbar>
      <Banner></Banner>
      <Stats></Stats>
      <Cart_header></Cart_header>
      <Suspense>
        <Carts_data cartsPromise={cartsPromise}></Carts_data>
      </Suspense>
    </>
  )
}

export default App
