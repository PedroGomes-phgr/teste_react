import logo from './logo.svg';
import './App.css';
import ListRender from './components/ListRender';
import ConditionalRender from './components/ConditionalRender';
import ShowUserName from './components/ShowUserName';
import CarDetails from './components/CarDetails';
function App() {
  const name = "matheus"
  
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
      <div>
        <ListRender/>
        <ConditionalRender/>
        {/*props*/ }
        <ShowUserName name={name} />
        {/**destructuring/ */}
        <CarDetails brand="VW" km={100000} color="Azul" />        
      </div>
   </div>
  );
}

export default App;
