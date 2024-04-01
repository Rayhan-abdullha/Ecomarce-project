
import Navbar from './components/header/Navbar'
import ProductPage from './pages/ProductPage'
import AfterHeader from './components/header/AfterHeader'
const App = () => {
  return (
    <div>
      <Navbar />
      <AfterHeader />
      <ProductPage />
    </div>
  )
}

export default App