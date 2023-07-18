//import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <>
      <div className='body'>
        <div className="header">
          <div className="logo">
            <img src="https://i.pinimg.com/originals/12/34/f5/1234f5670f0ba42a6b735d9c568566b3.jpg" alt="..." />
          </div>
          <div>
            <nav className="navbar">
              <ul>
                <li><a href="/">Home</a></li>
                <li><a href="/">About</a></li>
                <li><a href="/" target="_blank">Driving Schools</a></li>
                <li><a href="/">Services</a></li>
                <li><a href="http://127.0.0.1:5500/contact.html?fname=mwkm&lname=wijssi&email=xnhwbbywb%40gmail.com&sub=nswi&message=sjqwushu"
                  target="_blank">Contact us</a></li>
                <li><a href="/">Review</a></li>
                <li><a href="/">Carrier</a></li>
                <li>
                  <div className="right">
                    <p>Dial for any Query </p>
                    <p>xx-xxxx88</p>
                  </div>
                </li>
              </ul>
            </nav>
          </div>
        </div>
        <div className="content">
          <div>
            <p>A driving program
              designed for you to be safe and confident on the road.</p>
          </div>
          <div>
            <img src="https://usdrivingschool.com/wp-content/uploads/2022/09/car-1.png" alt="..." />
          </div>
          <div>

            <ul>
              <li>Responsibilities as a Driver</li>
              <li>Vehicle Controls</li>
              <li>Traffics Signs & Control Devices</li>
              <li>Rules of the Road</li>
              <li>Encountering other Road Users</li>
              <li>Driving in Dangerous Condition</li>
              <li>Highway Driving</li>
            </ul>

          </div>
        </div>
      </div>
    </>
  );
}

export default App;
