import './App.css';
import Navbar from './component/Navbar';
import Detail from './component/Detail';

function App() {
  return (
    <>
      <div className='body'>
        <Navbar/>
        <div className="break"><hr /></div>

        <Detail/>
        <div className="break"><hr /></div>
      </div>
    </>
  );
}

export default App;
