import './App.css';
import AddProduct from './pages/addProduct';
import List from './pages/listProduct';
import {BrowserRouter,Route} from 'react-router-dom';
import EditProduct from './pages/editProduct';

function App() {
  
  return (
    <div className="App">
      <header className="App-header">
        <BrowserRouter>
          <Route path="/products" component={List} />
          <Route path="/edit/:id" component={EditProduct}/>
          <Route path="/new" component={AddProduct}/>
        </BrowserRouter>
      </header>
    </div>
  );
}
export default App;
