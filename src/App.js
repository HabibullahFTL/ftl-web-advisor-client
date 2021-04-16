import logo from './logo.svg';
import './App.css';

function App() {
  fetch("http://localhost:3005/")
  .then(res=>res.json())
  .then(data=>console.log(data))
  return (
    <div>
      Hello
    </div>
  );
}

export default App;
