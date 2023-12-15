import './App.css';
import Navbar from './components/Navbar';
import UserDetails from './components/UserDetails';

function App() {
  return (
    <div className="container py-5">
      <Navbar/>
      <UserDetails/>
    </div>
  );
}

export default App;
