import logo from './logo.svg';
import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

function MyButton() {
  return (
    <button>
      Contact Us
    </button>
  );
}

function AboutPage() {
  return (
    <>
    <div className="about">
      <h1>About</h1>
    </div>
      <p>Saving habitats<br />one generation at a time.</p>
    </>
  );
}

function ServicesPage(){
  return(
    <>
    <h1>Services we offer</h1>
    <p>Here is a list of services we offer , and are key to our  clientele's satisfaction.</p>
    </>
  )
}
export default function MyApp() {
  return (
    <div>
      <h1>Safari Lodge</h1>
      <MyButton />
      <AboutPage/>
      <ServicesPage/>
    </div>
  );
}

