import logo from './logo.svg';
import './App.css';
import RegistrationForm from './Components/RegistrationForm';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/bootstrap/dist/js/bootstrap.min.js'

function App() {
  return (
    <div className="container">
      <RegistrationForm/>    
    </div>
  );
}

export default App;
