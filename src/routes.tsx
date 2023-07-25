import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Categories from './pages/Categories'
import Products from './pages/Product'
import Checkout from './pages/Checkout'

const RoutePages = () => (
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/categories" element={<Categories />} />
    <Route path="/product/:id" element={<Products />} />
    <Route path="/checkout" element={<Checkout />} />
  </Routes>
)

export default RoutePages
