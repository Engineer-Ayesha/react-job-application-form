import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import Textarea from './components/textarea';
function App() {
  return (
    <>
    <Navbar  title="TextUtils" aboutText="About" />
    <Textarea heading="Enter text here"/>
    </>
  );
}
export default App;
