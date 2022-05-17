import './App.css';
import {BrowserRouter, Routes, Route, Link} from "react-router-dom"
import Dashboard from './views/Dashboard';
import Create from './views/Create';
import { Details } from './views/Details';
import Update from './views/Update';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <h1>Product Manager</h1>
      
      <Link to ="/">Product Dashboard</Link>
      <Link to ="/products">Add Product</Link>
      
      <Routes>
        <Route path="/products" element={<><Create /></>}/>
        <Route path="/" element={<Dashboard />}/>
        <Route path="/products/:id/" element={<Details />}/>
        <Route path="/products/:id/edit" element={<Update />}/>
        <Route path="*" element={<><h1>Error</h1></>}/>
      </Routes>

      </BrowserRouter>
    </div>
  );
}

export default App;
