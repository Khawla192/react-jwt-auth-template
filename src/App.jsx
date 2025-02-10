import './App.css'
import NavBar from './components/NavBar/NavBar';

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <NavBar />
      <h1>Hello, friend!</h1>
    </>
  );
};

export default App;
