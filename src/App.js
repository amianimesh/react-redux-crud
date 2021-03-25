import { BrowserRouter } from 'react-router-dom';
import './App.css';
import Dashboard from './components/dashboard/Dashboard';
import Navbar from './components/layout/Navbar';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Navbar/>
        <Dashboard/>
      </div>
    </BrowserRouter>
  );
}

export default App;
