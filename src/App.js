import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Menu from './components/menu/menu';
import Header from './components/header/header';
import Panel from './components/panel/panel';
// import { Button } from 'react-bootstrap'; //teste

function App() {
  return (
    <div id='Screen'>
      
      <Menu />  

      <Header />
      
      <Panel />

    </div>
  );
}

export default App;
