import './App.css';
import '../src/services/fonts.css';
import ContextBox from '../src/components/ContextBox';
import Header from '../src/components/Header';

import Form from './components/Form';
import Sobre from '../src/pages/Sobre';

function App() {

  return (
    <div className="App">
      <Header/>
      <ContextBox/>
    </div>
  );
}

export default App;
