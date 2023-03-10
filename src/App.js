import './App.css';
import { Routes, Route} from "react-router-dom";
import Header from './containers/Header';
import ProductListing from './containers/ProductListing';
import ProductDetails from './containers/ProductDetail';

function App() {
  return (
    <div className="App">
      
        <Header />
        <Routes>
          <Route path="/" element={<ProductListing />} />
          <Route path="/product/:productId" exact component={ProductDetails} />
          <Route>404 Not Found!</Route>
        </Routes>

      
      
    </div>
  );
}

export default App;
