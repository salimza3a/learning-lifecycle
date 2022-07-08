import './App.css';
import Image from './softwareengineer.jpeg'
function App() {
  return (
    <div className="App">
    <img src='/logo192.png' alt= " " />
    <img style={{width: 320, height: 300, objectFit: "cover"}} src={Image} alt= " " />
    </div>
  );
}

export default App;
